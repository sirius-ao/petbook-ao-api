import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { PrismaService } from '../../database/prisma/prisma.service';

@Module({
  providers: [NotificationService, PrismaService],
  exports: [NotificationService],
})
export class NotificationModule {}
