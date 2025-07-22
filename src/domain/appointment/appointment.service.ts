import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data: dto });
  }

  findAll() {
    return this.prisma.appointment.findMany();
  }

  findOne(id: string) {
    return this.prisma.appointment.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateAppointmentDto) {
    return this.prisma.appointment.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.appointment.delete({ where: { id } });
  }

  // 👇 NOVO: agendamentos de um pet
  listByPetId(petId: string) {
    return this.prisma.appointment.findMany({
      where: { petId },
      orderBy: { date: 'asc' },
      include: {
        service: { select: { name: true } },
        business: { select: { name: true } },
      },
    });
  }

  // 👇 NOVO: agenda do dia
  dailyAgendaByBusiness(businessId: string, day = new Date()) {
    const start = new Date(day);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setHours(23, 59, 59, 999);

    return this.prisma.appointment.findMany({
      where: {
        businessId,
        date: { gte: start, lte: end },
      },
      orderBy: { date: 'asc' },
      include: {
        pet: { select: { name: true } },
        // client: { select: { name: true } },
      },
    });
  }
}
