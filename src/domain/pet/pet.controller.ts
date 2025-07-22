import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiTags, ApiOperation, ApiBadRequestResponse, ApiResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('pet')
@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @ApiOperation({ summary: 'Registrar pet' })
  @ApiResponse({ status: 201, description: 'Registrar pet' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @ApiOperation({ summary: 'Listar pets' })
  @ApiOkResponse({ description: 'Listar pets', type: CreatePetDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @ApiOperation({ summary: 'Detalhes do pet' })
  @ApiOkResponse({ description: 'Detalhes do pet', type: CreatePetDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(id); // ✅ ID é string
  }

  @ApiOperation({ summary: 'Atualizar pets' })
  @ApiOkResponse({ description: 'Atualizar pet', type: CreatePetDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(id, updatePetDto); // ✅ ID é string
  }

  @ApiOperation({ summary: 'Excluir pet' })
  @ApiOkResponse({ description: 'Excluir pet', type: CreatePetDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(id); // ✅ ID é string
  }

  // GET	/clients/:id/pets	Listar pets de um dono específico
  // falta criar esse request

 @Get('client/:id')
  findByClientId(@Param('id') clienteId: string) {
    return this.petService.findPetsByClientId(clienteId);
  }
  // falta criar esse request 


  
}
