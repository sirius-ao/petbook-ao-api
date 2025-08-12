import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}


export class CreateAppointmentDto {
  @ApiProperty({example:'01010e0w'})
  @IsDateString()
  date: string;

  @ApiProperty({example:'01010e0w'})
  @IsEnum(AppointmentStatus)
  @IsOptional()
  status?: AppointmentStatus;

  @ApiProperty({example:'01010e0w'})
  @IsNumber()
  petId: number;

  @ApiProperty({example:'01010e0w'})
  @IsNumber()
  @IsOptional()
  serviceId?: number;

  @ApiProperty({example:'01010e0w'})
  @IsNumber()
  businessId: number;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  @IsOptional()
  notes?: string;
}
