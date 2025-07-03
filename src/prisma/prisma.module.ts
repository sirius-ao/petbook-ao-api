import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// icpe
@Module({
  imports:[],
  controllers:[],
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
