import { Get, Injectable, Param } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Injectable()
export class AppointmentService {
  [x: string]: any;
    constructor(private prisma: PrismaService) {}
  
  create(createAppointmentDto: CreateAppointmentDto) {
    return this.appointment.create({
      data: createAppointmentDto,
    });
  }

  findAll() {
    return this.prisma.appointment.findMany({
      // include: {
      //   patient: true,
      //   doctor: true,
      // },
    });
  }

  findOne(id: string) {
    return this.prisma.appointment.findUnique({
      where: { id },
      // include: {
      //   patient: true,
      //   doctor: true,
      // },
    });
  }

  update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    return this.prisma.appointment.update({
      where: { id },
      data: {
        date: updateAppointmentDto.date ? new Date(updateAppointmentDto.date) : undefined,
        status: updateAppointmentDto.status,
        petId: updateAppointmentDto.petId,
        serviceId: updateAppointmentDto.serviceId,
        businessId: updateAppointmentDto.businessId,
        notes: updateAppointmentDto.notes,
      } , 
    });
  }

   @ApiOperation({ summary: 'Listar agendamentos de um pet' })
  @ApiOkResponse({ description: 'Lista dos agendamentos' })
  @Get(':id/appointments')
  listAppointments(@Param('id') petId: string) {
    return this.appointmentService.listByPetId(petId);
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
