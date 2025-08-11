// src/domain/pet/pet.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PetRepository } from './Pet.Repository';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) {}

  async create(dto: CreatePetDto) {
    return this.petRepository.create(dto);
  }

  async findAll() {
    return this.petRepository.findAll();
  }

  async findPetsByClientId(clienteId: number) {
    const pets = await this.petRepository.findPetsByClientId(clienteId);
    if (!pets || pets.length === 0) {
      throw new NotFoundException(`Nenhum pet encontrado para o cliente ${clienteId}`);
    }
    return pets;
  }

  async findOne(id: number) {
    const pet = await this.petRepository.findOne(id);
    if (!pet) throw new NotFoundException(`Pet com id ${id} não encontrado`);
    return pet;
  }

  async update(id: number, dto: UpdatePetDto) {
    return this.petRepository.update(id, dto);
  }

  async remove(id: number) {
    return this.petRepository.remove(id);
  }
}
