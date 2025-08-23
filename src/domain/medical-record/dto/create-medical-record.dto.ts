import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicalRecordDto {
  @ApiProperty()
  @IsInt()
  petId: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  vetId?: number; // opcional — recomendado atribuir a partir do user autenticado

  @ApiProperty({ required: false, type: String, format: 'date-time' })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
