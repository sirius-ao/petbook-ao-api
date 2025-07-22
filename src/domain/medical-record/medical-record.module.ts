import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { MedicalRecordController } from './medical-record.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
  exports: []
})
export class MedicalRecordModule {}
