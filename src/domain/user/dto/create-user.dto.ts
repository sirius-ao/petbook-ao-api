import { ApiProperty } from "@nestjs/swagger";
<<<<<<< HEAD
import { isArray, IsEnum, IsOptional, IsString } from "class-validator";
=======
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
>>>>>>> 387ff19eb860646d30bec2f67f0230d3fa29713e
// import { MedicalRecord , Affiliate, Role} from "generated/prisma";
import { MedicalRecord, Affiliate, Role } from "@prisma/client";
import { ValueType } from "exceljs";

export class CreateUserDto {

@ApiProperty({example:'01010e0w'})
@IsNumber()
id: number;

@ApiProperty({example:'Pedro Pessoa'})
@IsString()
name:string;

@ApiProperty({example:'usuario@gmail.com'})
@IsString()
email: string;

@ApiProperty({example:'01010e0w2012'})
@IsString()
password: string;

@ApiProperty({example:'VET'})
@IsEnum(Role)
role: Role;

@ApiProperty({example:'01010e0w'})
@IsNumber()
@IsOptional()
businessId?:number;

medicalRecord: MedicalRecord[];
affiliate: Affiliate[];

}
