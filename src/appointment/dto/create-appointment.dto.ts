import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { AppointmentStatus } from 'generated/prisma';

export class CreateAppointmentDto {
  @IsString()
  id: string;
  
  @IsDate()
  date: Date;

  @IsEnum(AppointmentStatus)
  status: AppointmentStatus;

  @IsString()
  petID: string;
  
  @IsString()
  serviceId: string;
  
  @IsString()
  businessId: string;

  @IsString()
  @IsOptional()
  note?: string;
}
