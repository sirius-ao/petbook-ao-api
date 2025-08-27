/* src/notifications/notification.service.ts */
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import sgMail from '@sendgrid/mail';
import { Twilio } from 'twilio';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private readonly twilioClient: Twilio | null = null;

  constructor(private readonly prisma: PrismaService) {
    // SendGrid
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      this.logger.log('SendGrid configurado.');
    } else {
      this.logger.warn('SENDGRID_API_KEY não configurado.');
    }

    // Twilio
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
      this.twilioClient = new Twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN,
      );
      this.logger.log('Twilio configurado.');
    } else {
      this.logger.warn('Credenciais do Twilio não configuradas.');
    }
  }

  async sendEmail(to: string, subject: string, text: string) {
    if (!process.env.SENDGRID_API_KEY) {
      this.logger.warn('SendGrid não configurado.');
      return { success: false, error: 'SendGrid não configurado' };
    }

    try {
      await sgMail.send({
        to,
        from: process.env.SENDGRID_SENDER || 'no-reply@clinic.local',
        subject,
        text,
      });
      this.logger.log(`E-mail enviado para ${to}`);
      return { success: true };
    } catch (err) {
      this.logger.error(`Erro ao enviar e-mail para ${to}`, err.stack);
      return { success: false, error: err };
    }
  }

  async sendWhatsApp(toPhone: string, message: string) {
    if (!this.twilioClient) {
      this.logger.warn('Twilio não configurado.');
      return { success: false, error: 'Twilio não configurado' };
    }

    try {
      const response = await this.twilioClient.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886',
        to: `whatsapp:${toPhone}`, // precisa ser número E.164 ex: +244999999999
        body: message,
      });
      this.logger.log(`WhatsApp enviado para ${toPhone}`);
      return { success: true, sid: response.sid };
    } catch (err) {
      this.logger.error(`Erro ao enviar WhatsApp para ${toPhone}`, err.stack);
      return { success: false, error: err };
    }
  }

  async createInAppNotification(userId: number, title: string, message: string) {
    return this.prisma.notification.create({
      data: { userId, title, message, read: false },
    });
  }

  async notifyByChannels(
    channels: string[],
    userId: number,
    subject: string,
    message: string,
  ) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      this.logger.warn(`Usuário ${userId} não encontrado.`);
      return;
    }

    for (const c of channels) {
      if (c === 'email' && user.email) {
        await this.sendEmail(user.email, subject, message);
      }
      if (c === 'whatsapp' && (user.email 
        // || user.whatsapp
    )) {
        // aqui assumo que sua tabela user tem campo phone/whatsapp
        await this.sendWhatsApp(user.email
            // || user.whatsapp
            , message);
      }
      if (c === 'inapp') {
        await this.createInAppNotification(userId, subject, message);
      }
    }
  }
}
