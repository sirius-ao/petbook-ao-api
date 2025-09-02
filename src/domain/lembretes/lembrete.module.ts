import { Module } from '@nestjs/common';
import { LembreteService } from './lembrete.service';
import { LembreteController } from './lembrete.controller';
import { NotificationModule } from '../notification/notification.module';
import { PrismaService } from '../../database/prisma/prisma.service';

import { ScheduleModule } from '@nestjs/schedule';


@Module({
imports: [ScheduleModule.forRoot(), NotificationModule],
controllers: [LembreteController],
providers: [LembreteService, PrismaService],
exports: [LembreteService],
})
export class LembreteModule {}