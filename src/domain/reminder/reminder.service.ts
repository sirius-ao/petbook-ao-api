import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../database/prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { NotificationGateway } from '../notifications/notification.gateway';

@Injectable()
export class ReminderService {
  private readonly logger = new Logger(ReminderService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailer: MailerService,
    private readonly whatsapp: WhatsappService,
    private readonly notifications: NotificationGateway,
  ) {}

  // roda a cada minuto
  @Cron(CronExpression.EVERY_MINUTE)
  async handleReminders() {
    const now = new Date();
    const thresholdMinutes = 60; // 🔔 lembrete 1h antes
    const reminderTime = new Date(now.getTime() + thresholdMinutes * 60 * 1000);

    // pega consultas dentro da janela
    const appointments = await this.prisma.appointment.findMany({
      where: {
        date: { lte: reminderTime, gte: now },
        status: 'SCHEDULED',
      },
      include: {
        pet: { include: { client: true } },
        business: true,
      },
    });

    for (const appt of appointments) {
      try {
        const client = appt.pet.client;

        this.logger.log(
          `🔔 Lembrete [appointment=${appt.id}] para cliente=${client.id}`,
        );

        // Email
        if (client.email) {
          await this.mailer.sendMail({
            to: client.email,
            subject: `Lembrete: ${appt.notes ?? 'Agendamento'}`,
            text: `Olá ${client.name}, lembrete do agendamento do pet ${appt.pet.name} em ${appt.date.toLocaleString()}.`,
          });
          this.logger.log(`📧 Email enviado para ${client.email}`);
        }

        // WhatsApp
        if (client.phone) {
          await this.whatsapp.sendMessage(
            client.phone,
            `🔔 Lembrete: ${appt.notes ?? 'Agendamento'} - ${appt.pet.name} em ${appt.date.toLocaleString()}`,
          );
        }

        // InApp
        this.notifications.emitToBusiness(appt.businessId, 'reminder.triggered', {
          appointmentId: appt.id,
          businessId: appt.businessId,
          petName: appt.pet.name,
          clientName: client.name,
          notes: appt.notes,
          date: appt.date,
          firedAt: new Date().toISOString(),
        });
        this.logger.log(
          `📱 Notificação InApp emitida para business ${appt.businessId}`,
        );

        // Opcional: marcar no log ou salvar em outra tabela de "notificações enviadas"
        // porque sem o campo remindAt não tem como impedir reenvio em cada execução
      } catch (err) {
        this.logger.error(`Erro ao processar lembrete id=${appt.id}`, err as any);
      }
    }
  }
}
