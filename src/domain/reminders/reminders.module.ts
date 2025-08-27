import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AiService } from '../ai/ai.service';
import { NotificationService } from '../notifications/notification.service';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { ReminderScheduler } from './reminder.scheduler';


@Module({
imports: [ScheduleModule.forRoot()],
controllers: [ReminderController],
providers: [PrismaService, AiService, NotificationService, ReminderService, ReminderScheduler],
})
export class RemindersModule {}