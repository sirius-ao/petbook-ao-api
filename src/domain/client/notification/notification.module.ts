// src/notification/notification.module.ts
import { Module } from '@nestjs/common';
// import { MailerModule } from '@nestjs-modules/mailer';
import { NotificationService } from './notification.service';
import { WhatsappService } from './whatsapp.service';

@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //       user: process.env.MAIL_USER,
    //       pass: process.env.MAIL_PASS,
    //     },
    //   },
    // }),
  ],
  providers: [NotificationService, WhatsappService],
  exports: [NotificationService],
})
export class NotificationModule {}
