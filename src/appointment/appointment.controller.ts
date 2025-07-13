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
}
