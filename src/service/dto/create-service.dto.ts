import { IsNumber, IsString } from "class-validator";
import { Appointment } from "generated/prisma";

export class CreateServiceDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    duration: string;

    @IsString()
    businessId: string;
    
    appointment: Appointment[];

}
