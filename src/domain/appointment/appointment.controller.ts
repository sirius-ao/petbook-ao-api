import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('appointment')
@Controller('appointment')
export class AppointmentController {
  prisma: any;
  constructor(private readonly appointmentService: AppointmentService) {}

  @ApiOperation({ summary: 'Criar novo agendamento' })
  @ApiResponse({ status: 201, description: 'Criar novo agendamento' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @ApiOperation({ summary: 'Ver todos os agendamentos' })
  @ApiOkResponse({
    description: 'Ver todos os agendamentos',
    type: CreateAppointmentDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @ApiOperation({ summary: 'Detalhes agendamentos' })
  @ApiOkResponse({
    description: 'Detalhes agendamentos',
    type: CreateAppointmentDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @ApiOperation({ summary: '	Atualizar agendamentos(ex: status)' })
  @ApiOkResponse({
    description: '	Atualizar agendamentos(ex: status)',
    type: CreateAppointmentDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @ApiOperation({ summary: 'Cancelar agendamentos' })
  @ApiOkResponse({
    description: 'Cancelar agendamentos',
    type: CreateAppointmentDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(+id);
  }



  // GET	/pets/:id/appointments	Listar agendamentos por pet

  // GET	/business/:id/agenda	Agenda do dia

    /** Agendamentos de um pet */
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

  /** Agenda do dia de um negócio (clínica) */
  dailyAgendaByBusiness(businessId: string, day = new Date()) {
    // delimita o intervalo 00:00–23:59 do dia informado
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
        pet:  { select: { name: true } },
        client:{ select: { name: true } },
      },
    });
  }

}
