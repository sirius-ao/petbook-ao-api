// src/pet/pet.module.ts
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PetRepository } from './Pet.Repository';
import { DatabaseModule } from '../../database/database.module'; // Importa PrismaService

@Module({
  imports: [DatabaseModule], // ✅ Para injetar PrismaService no repositório
  controllers: [PetController],
  providers: [PetService, PetRepository], // ✅ Inclui o repositório
  exports: [PetService], // Se outro módulo precisar usar
})
export class PetModule {}
