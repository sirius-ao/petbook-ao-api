import { IsEnum, IsOptional, IsString } from "class-validator";
import { MedicalRecord , Affiliate, Role} from "generated/prisma";

export class CreateUserDto {

@IsString()
id: string;

@IsString()
name:string;

@IsString()
email: string;

@IsString()
password: string;

@IsEnum(Role)
role: Role;

@IsString()
@IsOptional()
businessId?:string;


medicalRecord: MedicalRecord[];
affiliate: Affiliate[];

}
