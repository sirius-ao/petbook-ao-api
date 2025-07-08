import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}


export class CreateAppointmentDto {
  @IsDateString()
  date: string;

  @IsEnum(AppointmentStatus)
  @IsOptional()
  status?: AppointmentStatus;

  @IsString()
  petId: string;

  @IsString()
  @IsOptional()
  serviceId?: string;

  @IsString()
  businessId: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
