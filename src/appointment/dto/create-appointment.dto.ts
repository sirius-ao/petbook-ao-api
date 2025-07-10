import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

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
  @IsString()
  petId: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  @IsOptional()
  serviceId?: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  businessId: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  @IsOptional()
  notes?: string;
}
