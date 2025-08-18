import { Injectable } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Injectable()
export class NotificationService {
  constructor(private readonly whatsappService: WhatsappService) {}

  async sendWhatsapp(phone: string, message: string) {
    await this.whatsappService.sendMessage(phone, message);
  }
}
