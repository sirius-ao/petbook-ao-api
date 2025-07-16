import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // ✅ Adiciona aqui também
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
