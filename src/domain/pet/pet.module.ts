// src/pet/pet.module.ts
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { DatabaseModule } from 'src/database/database.module';  // ✅ Importa aqui!
@Module({
  imports: [DatabaseModule], // ✅ Adiciona aqui também
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
