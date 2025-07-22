import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class MedicalRecordService {
  
  constructor(private readonly prisma: PrismaService){}

  create(createMedicalRecordDto: CreateMedicalRecordDto) {
    return 'This action adds a new medicalRecord';
  }

  findAll() {
    return `This action returns all medicalRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalRecord`;
  }

  update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return `This action updates a #${id} medicalRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalRecord`;
  }
}
