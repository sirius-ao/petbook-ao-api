import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @ApiOperation({ summary: 'Registar Serviços' })
  @ApiResponse({ status: 201, description: 'Registrar Serviço' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @ApiOperation({ summary: 'Listar Serviços' })
  @ApiOkResponse({
    description: 'Listar Serviços',
    type: CreateServiceDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @ApiOperation({ summary: 'Detalhar Serviço' })
  @ApiOkResponse({
    description: 'Detalhar Serviço',
    type: CreateServiceDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.serviceService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar Serviço' })
  @ApiOkResponse({
    description: 'Atualizar Serviço',
    type: CreateServiceDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(id, updateServiceDto);
  }

  @ApiOperation({ summary: 'Excluir Serviço' })
  @ApiOkResponse({
    description: 'Excluir Serviço',
    type: CreateServiceDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.serviceService.remove(id);
  }
}
