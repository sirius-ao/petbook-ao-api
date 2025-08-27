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
        clientId  : createPetDto.clienteId,
        lastFedAt: new Date(), // inicializa alimentação
      },
      include: { client: true }, // garante que client venha junto
    });
  }

  findAll() {
    return this.prisma.pet.findMany({
      include: { client: true, appointments: true, records: true },
    });
  }

  findPetsByClientId(clientId  : number) {
    return this.prisma.pet.findMany({
      where: { clientId   },
      include: { client: true },
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
        clientId  : updatePetDto.clienteId,
      },
      include: { client: true },
    });
  }

  remove(id: number) {
    return this.prisma.pet.delete({
      where: { id },
      include: { client: true },
    });
  }

  async updateLastFed(id: number, date: Date) {
    return this.prisma.pet.update({
      where: { id },
      data: { lastFedAt: date },
      include: { client: true },
    });
  }

  async findAllWithClient() {
    return this.prisma.pet.findMany({ include: { client: true } });
  }
}
