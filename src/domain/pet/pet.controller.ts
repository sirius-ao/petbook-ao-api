// src/domain/pet/pet.controller.ts
import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import axios from 'axios';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async create(@Body() dto: CreatePetDto) {
    const pet = await this.petService.create(dto);

    // 🔹 Dispara evento para o n8n
    try {
      await axios.post('http://localhost:5678/webhook/new-pet', pet);
    } catch (err) {
      console.error('Erro ao notificar n8n:', err.message);
    }

    return pet;
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.petService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePetDto) {
    return this.petService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.petService.remove(id);
  }

  @Get('client/:id')
  findByClientId(@Param('id') clienteId: number) {
    return this.petService.findPetsByClientId(clienteId);
  }

  // Endpoint para o n8n puxar pets
  @Get('n8n/all')
  getPetsForN8n() {
    return this.petService.findAll();
  }
}
