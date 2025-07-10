import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { MedicalRecord , Affiliate, Role} from "generated/prisma";

export class CreateUserDto {

@ApiProperty({example:'01010e0w'})
@IsString()
id: string;

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
@IsString()
@IsOptional()
businessId?:string;


medicalRecord: MedicalRecord[];
affiliate: Affiliate[];

}
