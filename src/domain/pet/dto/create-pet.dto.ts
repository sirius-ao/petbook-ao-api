import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Appointment, MedicalRecord } from 'generated/prisma';

export class CreatePetDto {

  // @ApiProperty({example:'01010e0w'})
  // @IsString()
  // id: string;

  // @ApiProperty({example:'01010e0w'})
  // @IsString()
  // petIdNumber: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  name: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  species: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  breed: string;

  @ApiProperty({example:'01010e0w'})
  @IsDate()
  @Type(()=> Date)
  birthDate?: Date;

  @ApiProperty({example:'01010e0w'})
  @IsNumber()
  clienteId: number;

  appointments: Appointment[];
  records: MedicalRecord[];
}
