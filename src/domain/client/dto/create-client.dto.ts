import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Pet, Sale } from "generated/prisma";

export class CreateClientDto {

// @ApiProperty({example:'01010e0w'})
// @IsString()
// id: string;

@ApiProperty({example:'01010e0w'})
@IsString()
name: string;

@ApiProperty({example:'01010e0w'})
@IsOptional()
@IsString()
email?: string;

@ApiProperty({example:'01010e0w'})
@IsOptional()
@IsString()
phone?: string;

@ApiProperty({example:'01010e0w'})
@IsNumber()
businessId:number;


pet: Pet[];
sale: Sale[];

}
