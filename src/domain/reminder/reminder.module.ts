import { Module } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { NotificationModule } from '../notifications/notification.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule, NotificationModule],
  providers: [ReminderService, PrismaService, WhatsappService],
  controllers: [ReminderController],
})
export class ReminderModule {}

