import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
// import { MedicalRecord , Affiliate, Role} from "generated/prisma";
import { MedicalRecord, Affiliate, Role } from "@prisma/client";

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
