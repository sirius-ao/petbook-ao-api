// src/whatsapp/whatsapp.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post('send')
  async sendMessage(@Body() body: { to: string; message: string }) {
    await this.whatsappService.sendMessage(body.to, body.message);
    return { status: 'Mensagem enviada!' };
  }
}
