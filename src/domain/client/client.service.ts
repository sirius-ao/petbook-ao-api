// src/client/client.service.ts
import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { WhatsappService } from './notification/whatsapp.service';

@Injectable()
export class ClientService {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly whatsappService: WhatsappService,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const client = await this.clientRepository.create(createClientDto);

    // Enviar WhatsApp
    if (client.phone) {
      const message = `Olá ${client.name}, bem-vindo(a)! 🐾`;
      await this.whatsappService.sendMessage(client.phone, message);
    }

    return client;
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(id: number) {
    return this.clientRepository.findById(id);
  }

  update(id: number, updateClientDto: any) {
    return this.clientRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientRepository.remove(id);
  }
}
