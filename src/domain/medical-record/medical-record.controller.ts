import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse} from '@nestjs/swagger';


@ApiTags('medical-record')
@Controller('medical-record')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

    @ApiOperation({ summary: 'Criar registro Prontuário clínico' })
    @ApiResponse({ status: 201, description: 'Criar registro Prontuário clínico' })
    @ApiBadRequestResponse({ description: 'Bad Payload send' })
    @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordService.create(createMedicalRecordDto);
  }

    @ApiOperation({ summary: 'Listar todos Prontuário clínico ' })
    @ApiOkResponse({
      description: 'Listar todos Prontuário clínico',
      type: CreateMedicalRecordDto,
    })
    @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.medicalRecordService.findAll();
  }

    @ApiOperation({ summary: 'Ver detalhes Prontuário clínico' })
    @ApiOkResponse({
      description: 'Ver detalhes Prontuário clínico',
      type: CreateMedicalRecordDto,
    })
    @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalRecordService.findOne(+id);
  }

    @ApiOperation({ summary: 'Atualizar Prontuário clínico' })
    @ApiOkResponse({
      description: 'Atualizar Prontuário clínico',
      type: CreateMedicalRecordDto,
    })
    @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordService.update(+id, updateMedicalRecordDto);
  }

    @ApiOperation({ summary: 'Cancelar Prontuário clínico' })
    @ApiOkResponse({
      description: 'Cancelar Prontuário clínico',
      type: CreateMedicalRecordDto,
    })
    @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalRecordService.remove(+id);
  }

  // GET	/pets/:id/records	Histórico de um pet específico
}
