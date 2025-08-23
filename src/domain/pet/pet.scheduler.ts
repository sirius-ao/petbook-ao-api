// src/domain/pet/feeding-alert.scheduler.ts
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PetService } from './pet.service';

@Injectable()
export class FeedingAlertScheduler {
  constructor(private readonly petService: PetService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleFeedingAlerts() {
    await this.petService.checkFeedingAlerts();
  }
}
