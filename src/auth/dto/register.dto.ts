import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export enum UserRole {
  ADMIN = 'ADMIN',
  VET = 'VET',
  ATTENDANT = 'ATTENDANT',
}

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @IsString()
  @IsOptional()
  businessId?: string;
}
