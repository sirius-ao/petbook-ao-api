import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateServiceDto) {
    return this.prisma.service.create({
      data,
      include: {
        business: true,
        Appointment: {
          orderBy: { date: 'asc' }, // agendamentos ordenados pela data
        },
      },
    });
  }

  async findAll() {
    return this.prisma.service.findMany({
      include: {
        business: true,
        Appointment: {
          orderBy: { date: 'asc' },
        },
      },
    });
  }

  async findById(id: number) {
    const service = await this.prisma.service.findUnique({
      where: { id },
      include: {
        business: true,
        Appointment: {
          orderBy: { date: 'asc' },
        },
      },
    });

    if (!service) {
      throw new NotFoundException(`Serviço com id ${id} não encontrado`);
    }

    return service;
  }

  async update(id: number, data: UpdateServiceDto) {
    return this.prisma.service.update({
      where: { id },
      data,
      include: {
        business: true,
        Appointment: {
          orderBy: { date: 'asc' },
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.service.delete({
      where: { id },
    });
  }
}
