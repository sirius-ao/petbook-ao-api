import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule], // ✅ Adiciona aqui também
  controllers: [BusinessController],
  providers: [BusinessService],
  exports:[]
})
export class BusinessModule {}
