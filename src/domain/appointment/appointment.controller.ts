import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  @ApiOkResponse({ description: 'Ver todos os agendamentos' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @ApiOperation({ summary: 'Detalhes agendamentos' })
  @ApiOkResponse({ description: 'Detalhes agendamentos' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.appointmentService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar agendamentos (ex: status)' })
  @ApiOkResponse({ description: 'Atualizar agendamentos' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @ApiOperation({ summary: 'Cancelar agendamentos' })
  @ApiOkResponse({ description: 'Cancelar agendamentos' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.appointmentService.remove(id);
  }

  // 👉 EXTRA: listar agendamentos de um pet
  @ApiOperation({ summary: 'Listar agendamentos por Pet' })
  @ApiOkResponse({ description: 'Lista de agendamentos do Pet' })
  @ApiNotFoundResponse({ description: 'Pet não encontrado ou sem agendamentos' })
  @Get('/pet/:petId')
  listByPet(@Param('petId') petId: number) {
    return this.appointmentService.listByPetId(petId);
  }

  // 👉 EXTRA: listar agenda do dia de um negócio (clínica)
  @ApiOperation({ summary: 'Agenda do dia por Business' })
  @ApiOkResponse({ description: 'Agenda do dia da clínica' })
  @ApiNotFoundResponse({ description: 'Nenhum agendamento encontrado' })
  @Get('/business/:businessId/agenda')
  dailyAgenda(
    @Param('businessId') businessId: number,
    @Query('day') day?: string, // opcionalmente pode receber data via query
  ) {
    const date = day ? new Date(day) : new Date();
    return this.appointmentService.dailyAgendaByBusiness(businessId, date);
  }
}
