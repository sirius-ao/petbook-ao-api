import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { WhatsappService } from './notification/whatsapp.service'; // ajuste o caminho

@Injectable()
export class ClientRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly whatsappService: WhatsappService,
  ) {}

  async create(data: CreateClientDto) {
    const client = await this.prisma.client.create({ data });

    // Envia WhatsApp se existir telefone
    if (client.phone) {
      await this.whatsappService.sendMessage(
        client.phone,
        `Olá ${client.name}, seja bem-vindo(a)! Seu cadastro foi concluído com sucesso.`
      );
    }

    return client;
  }

  async findAll() {
    return this.prisma.client.findMany({
      include: { business: true, pets: true, Sale: true },
    });
  }

  async findById(id: number) {
    const client = await this.prisma.client.findUnique({
      where: { id },
      include: { business: true, pets: true, Sale: true },
    });

    if (!client) {
      throw new NotFoundException(`Client com id ${id} não encontrado`);
    }

    return client;
  }

  async update(id: number, data: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.client.delete({
      where: { id },
    });
  }
}
