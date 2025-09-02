// File: src/lembretes/dto/create-lembrete.dto.ts
import { IsOptional, IsString, IsArray, IsBoolean, IsDateString, IsInt } from 'class-validator';


export class CreateLembreteDto {
@IsOptional()
@IsString()
title?: string;


@IsOptional()
@IsString()
message?: string;


// ISO 8601 datetime string
@IsOptional()
@IsDateString()
dateTime?: string;


// e.g. 'daily', 'weekly', 'cron:0 18 * * *'
@IsOptional()
@IsString()
repeat?: string;


@IsOptional()
@IsArray()
channels?: string[]; // ['email','whatsapp','inapp']


@IsOptional()
@IsBoolean()
isPrescription?: boolean;


@IsOptional()
prescription?: any;


@IsOptional()
@IsInt()
petId?: number;


@IsOptional()
@IsInt()
clienteId?: number;
}