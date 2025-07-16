// src/pet/pet.module.ts
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ Importa aqui!

@Module({
  imports: [PrismaModule], // ✅ Adiciona aqui também
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
