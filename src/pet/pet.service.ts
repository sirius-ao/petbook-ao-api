import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto) {
    return this.prisma.pet.create({
      data: {
        name: createPetDto.name,
        species: createPetDto.species,
        breed: createPetDto.breed,
        birthDate: createPetDto.birthDate
          ? new Date(createPetDto.birthDate)
          : undefined,
        clienteId: createPetDto.clienteId, // 🔁 nome corrigido aqui
      },
    });
  }

  async findAll() {
    return this.prisma.pet.findMany({
      include: {
        client: true,
        appointments: true,
        records: true,
      },
    });
  }

  async findOne(id: string) {
    const pet = await this.prisma.pet.findUnique({
      where: { id },
      include: {
        client: true,
        appointments: true,
        records: true,
      },
    });

    if (!pet) throw new NotFoundException(`Pet com id ${id} não encontrado`);

    return pet;
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    return this.prisma.pet.update({
      where: { id },
      data: {
        name: updatePetDto.name,
        species: updatePetDto.species,
        breed: updatePetDto.breed,  
        birthDate: updatePetDto.birthDate
          ? new Date(updatePetDto.birthDate)
          : undefined,
        clienteId: updatePetDto.clienteId, // 🔁 nome corrigido aqui
        }
    });
  }

  async remove(id: string) {
    return this.prisma.pet.delete({
      where: { id },
    });
  }
}
