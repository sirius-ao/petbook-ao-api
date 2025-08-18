import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAppointmentDto) {
    return this.prisma.appointment.create({
      data,
      include: {
        service: true,
        pet: true,
        business: true,
      },
    });
  }

  async findAll() {
    return this.prisma.appointment.findMany({
      include: {
        service: true,
        pet: true,
        business: true,
      },
    });
  }

  async findById(id: number) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
      include: {
        service: true,
        pet: true,
        business: true,
      },
    });

    if (!appointment) {
      throw new NotFoundException(`Agendamento com id ${id} não encontrado`);
    }

    return appointment;
  }

  async update(id: number, data: UpdateAppointmentDto) {
    return this.prisma.appointment.update({
      where: { id },
      data,
      include: {
        service: true,
        pet: true,
        business: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.appointment.delete({
      where: { id },
    });
  }

  async listByPetId(petId: number) {
    return this.prisma.appointment.findMany({
      where: { petId },
      include: {
        service: true,
        business: true,
      },
    });
  }

  async dailyAgendaByBusiness(businessId: number, date: Date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    return this.prisma.appointment.findMany({
      where: {
        businessId,
        date: { gte: start, lte: end },
      },
      include: {
        service: true,
        pet: true,
      },
    });
  }

  async findUpcomingReminders(hoursAhead: number) {
    const now = new Date();
    const future = new Date(now.getTime() + hoursAhead * 60 * 60 * 1000);

    return this.prisma.appointment.findMany({
      where: {
        date: { gte: now, lte: future },
      },
      include: {
        service: true,
        pet: { include: { client: true } },
      },
    });
  }
}
