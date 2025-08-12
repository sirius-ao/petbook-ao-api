// src/domain/pet/pet.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createPetDto: CreatePetDto) {
    return this.prisma.pet.create({
      data: {
        name: createPetDto.name,
        species: createPetDto.species,
        breed: createPetDto.breed,
        birthDate: createPetDto.birthDate ? new Date(createPetDto.birthDate) : undefined,
        clienteId: createPetDto.clienteId,
      },
    });
  }

  findAll() {
    return this.prisma.pet.findMany({
      include: { client: true, appointments: true, records: true },
    });
  }

  findPetsByClientId(clienteId: number) {
    return this.prisma.pet.findMany({
      where: { clienteId },
      select: {
        id: true,
        name: true,
        species: true,
        breed: true,
        client: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.pet.findUnique({
      where: { id },
      include: { client: true, appointments: true, records: true },
    });
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return this.prisma.pet.update({
      where: { id },
      data: {
        name: updatePetDto.name,
        species: updatePetDto.species,
        breed: updatePetDto.breed,
        birthDate: updatePetDto.birthDate ? new Date(updatePetDto.birthDate) : undefined,
        clienteId: updatePetDto.clienteId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.pet.delete({ where: { id } });
  }
}
