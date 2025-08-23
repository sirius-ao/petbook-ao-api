import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { MedicalRecordSummaryDto } from './dto/medical-record-summary.dto';

// se usas autenticação com passport-jwt, descomenta as linhas abaixo:
// import { AuthGuard } from '@nestjs/passport';
// import { Roles } from '../auth/roles.decorator';
// import { RolesGuard } from '../auth/roles.guard';
// @UseGuards(AuthGuard('jwt'), RolesGuard)

@ApiTags('medical-record')
@Controller('medical-record')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @ApiOperation({ summary: 'Criar registro Prontuário clínico' })
  @ApiResponse({ status: 201, description: 'Criar registro Prontuário clínico' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  // @Roles('VET','ADMIN') // opcional: restringe por role
  @Post()
  async create(@Body() createMedicalRecordDto: CreateMedicalRecordDto, @Req() req: any) {
    // se o cliente não fornecer vetId, atribui o vet autenticado (mais seguro)
    if (!createMedicalRecordDto.vetId && req?.user?.id) {
      createMedicalRecordDto.vetId = req.user.id;
    }
    return this.medicalRecordService.create(createMedicalRecordDto);
  }

  @ApiOperation({ summary: 'Listar todos Prontuário clínico ' })
  @ApiOkResponse({
    description: 'Listar todos Prontuário clínico',
    type: CreateMedicalRecordDto,
    isArray: true,
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualizar Prontuário clínico' })
  @ApiOkResponse({
    description: 'Atualizar Prontuário clínico',
    type: CreateMedicalRecordDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  // @Roles('VET','ADMIN')
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto, @Req() req: any) {
    // se não vier vetId e houver user autenticado, atribui
    if (!updateMedicalRecordDto.vetId && req?.user?.id) {
      updateMedicalRecordDto.vetId = req.user.id;
    }
    return this.medicalRecordService.update(+id, updateMedicalRecordDto);
  }

  @ApiOperation({ summary: 'Cancelar Prontuário clínico' })
  @ApiOkResponse({
    description: 'Cancelar Prontuário clínico',
    type: CreateMedicalRecordDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  // @Roles('VET','ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordService.remove(+id);
  }

  // Histórico por Pet
  @ApiOperation({ summary: 'Histórico médico de um pet (completo)' })
  @ApiOkResponse({
    description: 'Lista de prontuários do pet',
    type: CreateMedicalRecordDto,
    isArray: true,
  })
  @Get('/pets/:id/records')
  findByPet(@Param('id', ParseIntPipe) petId: number) {
    return this.medicalRecordService.findByPet(petId);
  }

  @ApiOperation({ summary: 'Histórico médico resumido de um pet (resumo do veterinário)' })
  @ApiOkResponse({
    description: 'Lista de resumos dos prontuários do pet',
    type: MedicalRecordSummaryDto,
    isArray: true,
  })
  @Get('/pets/:id/records/summary')
  findSummaryByPet(@Param('id', ParseIntPipe) petId: number) {
    return this.medicalRecordService.findSummaryByPet(+petId);
  }
}
