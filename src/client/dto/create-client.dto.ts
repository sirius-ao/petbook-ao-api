import { IsOptional, IsString } from "class-validator";
import { Pet, Sale } from "generated/prisma";

export class CreateClientDto {

@IsString()
id: string;

@IsString()
name: string;

@IsOptional()
@IsString()
email?: string;

@IsOptional()
@IsString()
phone?: string;

@IsString()
businessId:string;

pet: Pet[];
sale: Sale[];

}
