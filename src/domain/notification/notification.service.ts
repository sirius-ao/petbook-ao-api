import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Twilio } from 'twilio';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  private transporter: nodemailer.Transporter;
  private twilioClient: Twilio;

  constructor() {
    // Configurar transportador de e-mail (Nodemailer)
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.MAIL_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Configurar Twilio corretamente
    this.twilioClient = new Twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  async sendReminder(lembrete: any) {
    this.logger.log(
      `Disparando lembrete ${lembrete.id} para cliente ${lembrete.cliente?.nome} | canais: ${lembrete.channels}`,
    );

    if (lembrete.channels.includes('email') && lembrete.cliente?.email) {
      await this.sendEmail(
        lembrete.cliente.email,
        lembrete.title || 'Lembrete',
        lembrete.message || '',
      );
    }

    if (lembrete.channels.includes('whatsapp') && lembrete.cliente?.telefone) {
      await this.sendWhatsApp(
        lembrete.cliente.telefone,
        lembrete.message || lembrete.title,
      );
    }
  }

  private async sendEmail(to: string, subject: string, text: string) {
    try {
      await this.transporter.sendMail({
        from: process.env.MAIL_FROM || '"Clínica Vet" <no-reply@clinicavet.com>',
        to,
        subject,
        text,
      });
      this.logger.log(`E-mail enviado para ${to}`);
    } catch (error) {
      this.logger.error(`Falha ao enviar e-mail para ${to}`, error.stack);
    }
  }

  private async sendWhatsApp(to: string, message: string) {
    try {
      const toFormatted = to.startsWith('+') ? to : `+244${to}`;

      await this.twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_WHATSAPP_NUMBER, // ex: whatsapp:+14155238886
        to: `whatsapp:${toFormatted}`,
      });

      this.logger.log(`WhatsApp enviado para ${toFormatted}`);
    } catch (error) {
      this.logger.error(`Falha ao enviar WhatsApp para ${to}`, error.stack);
    }
  }
}
