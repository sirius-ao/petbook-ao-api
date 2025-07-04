import { IsEnum } from "class-validator";
import { MedicalRecord , Affiliate, Role} from "generated/prisma";

export class CreateUserDto {
id: string;
name:string;
email: string;
password: string;
@IsEnum(Role)
role: Role;
businessId?:string;
medicalRecord: MedicalRecord[];
affiliate: Affiliate[];

}
