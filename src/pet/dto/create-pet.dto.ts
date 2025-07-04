import { IsDate, IsString } from 'class-validator';
import { Appointment, MedicalRecord } from 'generated/prisma';

export class CreatePetDto {
  @IsString()
  id: string;

  @IsString()
  petIdNumber: string;

  @IsString()
  name: string;

  @IsString()
  species: string;

  @IsString()
  breed: string;

  @IsDate()
  birthDate?: Date;

  @IsString()
  clienteId: string;

  appointments: Appointment[];
  records: MedicalRecord[];
}
