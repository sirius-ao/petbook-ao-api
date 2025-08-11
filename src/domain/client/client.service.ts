/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}
  create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({
      data: {
        name: createClientDto.name,
        email: createClientDto.email,
        phone: createClientDto.phone,
        businessId: createClientDto.businessId,
      },
    });
  }

  findAll() {
    return this.prisma.client.findMany({
      include: {
        business: true,
        pets: true,
        Sale: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: { id },
      include: {
        business: true,
        pets: true,
        Sale: true,
      },
    });
    if (!Client)
      throw new NotFoundException(`Client com id ${id} não encontrado`);
    return Client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
