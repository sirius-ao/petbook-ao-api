/* src/reminders/reminder.service.ts */
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AiService } from '../ai/ai.service';
import { NotificationService } from '../notifications/notification.service';

@Injectable()
export class ReminderService {
  private readonly logger = new Logger(ReminderService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ai: AiService,
    private readonly notifier: NotificationService,
  ) {}

  async createFromText(userId: number, text: string) {
    try {
      const parsed = await this.ai.parseReminder(text);

      // Encontrar pet se informado
     let pet = parsed.petName
  ? await this.prisma.pet.findFirst({
      where: { name: parsed.petName },
    })
  : null;



      // Caso seja prescrição
      if (parsed.isPrescription && parsed.prescription) {
        const pres = await this.prisma.prescription.create({
          data: {
            name: parsed.prescription.name,
            dose: parsed.prescription.dose,
            freqHours: parsed.prescription.freqHours,
            start: new Date(parsed.prescription.start),
            end: new Date(parsed.prescription.end),
            petId: pet?.id ?? undefined,
            userId,
          },
        });

        // Criar primeiro lembrete
        const next = new Date(parsed.prescription.start);
        await this.prisma.reminder.create({
          data: {
            title: `Dar remédio: ${pres.name}`,
            message: `${pres.dose}`,
            dateTime: next,
            repeat: `every_${pres.freqHours}h`,
            channels: parsed.channels ?? ['inapp'],
            userId,
            petId: pet?.id ?? undefined,
          },
        });

        this.logger.log(`Prescrição criada e lembrete inicial gerado para usuário ${userId}`);
        return { createdPrescription: pres };
      }

      // Caso seja apenas lembrete comum
      const dt = parsed.dateTime ? new Date(parsed.dateTime) : new Date();
      const reminder = await this.prisma.reminder.create({
        data: {
          title: parsed.title ?? (parsed.message ?? 'Lembrete'),
          message: parsed.message,
          dateTime: dt,
          repeat: parsed.repeat ?? 'none',
          channels: parsed.channels ?? ['inapp'],
          userId,
          petId: pet?.id ?? undefined,
        },
      });

      this.logger.log(`Lembrete criado para usuário ${userId}`);
      return reminder;
    } catch (err) {
      this.logger.error('Erro ao criar lembrete', err.stack);
      throw err;
    }
  }

  async getDueReminders(windowMinutes = 1) {
    const now = new Date();
    const windowEnd = new Date(now.getTime() + windowMinutes * 60 * 1000);

    return this.prisma.reminder.findMany({
      where: { dateTime: { lte: windowEnd }, sent: false },
    });
  }

  async markSent(reminderId: number) {
    return this.prisma.reminder.update({
      where: { id: reminderId },
      data: { sent: true },
    });
  }

  async reschedule(reminder: any) {
    if (!reminder.repeat || reminder.repeat === 'none') return;

    const current = new Date(reminder.dateTime);
    let next: Date | null = null;

    if (reminder.repeat === 'daily') {
      next = new Date(current.getTime() + 24 * 3600 * 1000);
    } else if (reminder.repeat === 'weekly') {
      next = new Date(current.getTime() + 7 * 24 * 3600 * 1000);
    } else if (reminder.repeat.startsWith('every_')) {
      const parts = reminder.repeat.split('_');
      const hours = parseInt(parts[1]);
      if (!Number.isNaN(hours)) {
        next = new Date(current.getTime() + hours * 3600 * 1000);
      }
    }

    if (next) {
      await this.prisma.reminder.update({
        where: { id: reminder.id },
        data: { dateTime: next, sent: false },
      });
      this.logger.log(`Lembrete ${reminder.id} reagendado para ${next.toISOString()}`);
    } else {
      await this.markSent(reminder.id);
    }
  }

  /**
   * Executa lembretes que já estão no prazo
   */
  async runDueReminders(windowMinutes = 1) {
    const due = await this.getDueReminders(windowMinutes);

    for (const reminder of due) {
      try {
        await this.notifier.notifyByChannels(
          reminder.channels,
          reminder.userId,
          reminder.title,
          reminder.message,
        );

        await this.markSent(reminder.id);
        await this.reschedule(reminder);

        this.logger.log(`Lembrete ${reminder.id} enviado para usuário ${reminder.userId}`);
      } catch (err) {
        this.logger.error(`Erro ao processar lembrete ${reminder.id}`, err.stack);
      }
    }
  }
}
