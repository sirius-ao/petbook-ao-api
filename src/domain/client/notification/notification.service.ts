import { Injectable, Logger } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { WASocket } from '@whiskeysockets/baileys';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private waSocket: WASocket; // Socket do WhatsApp

  constructor() {}

  // Recebe o socket do WhatsApp (injetado no main.ts)
  setWhatsAppSocket(socket: WASocket) {
    this.waSocket = socket;
  }

  // ======= EMAIL =======
  async sendEmail(to: string, name: string) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      this.logger.error('Credenciais SMTP não configuradas no .env');
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject: 'Bem-vindo ao PetBook!',
      text: `Olá ${name}, seu cadastro foi concluído com sucesso!`,
    });

    this.logger.log(`📧 E-mail enviado para ${to}`);
  }

  // ======= SMS =======
  async sendSms(phone: string, message: string) {
    // Aqui você integra com seu serviço de SMS (Twilio, TotalVoice, etc.)
    this.logger.log(`📱 (SIMULAÇÃO) SMS enviado para ${phone}: ${message}`);
  }

  // ======= WHATSAPP =======
  async sendWhatsapp(phone: string, message: string) {
    if (!this.waSocket) {
      this.logger.error('WhatsApp não está conectado.');
      return;
    }

    // Baileys exige formato 55DDDNUMERO@s.whatsapp.net para Brasil
    const waId = phone.replace(/\D/g, '') + '@s.whatsapp.net';

    await this.waSocket.sendMessage(waId, { text: message });

    this.logger.log(`💬 WhatsApp enviado para ${phone}: ${message}`);
  }
}
