import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
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
  @IsString()
  clienteId: string;

  appointments: Appointment[];
  records: MedicalRecord[];
}
