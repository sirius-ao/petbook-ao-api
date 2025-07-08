import { IsNumber, IsString } from "class-validator";
import { Appointment } from "generated/prisma";

export class CreateServiceDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    duration: number;

    @IsString()
    businessId: string;
    
    appointment: Appointment[];

}
