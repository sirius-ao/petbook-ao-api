// src/pet/pet.scheduler.ts
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { PetService } from './pet.service';

@Injectable()
export class PetScheduler {
  constructor(private readonly petService: PetService) {}

  @Interval(1000 * 60 * 60) // rodar a cada hora
  async handleFeedingAlerts() {
    await this.petService.checkFeedingAlerts();
  }
}
