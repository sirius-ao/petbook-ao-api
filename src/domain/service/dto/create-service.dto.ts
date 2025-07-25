import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Appointment } from "generated/prisma";

export class CreateServiceDto {
    // @ApiProperty({example:'01010e0w'})
    // @IsString()
    // id: string;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    name: string;

    @ApiProperty({example:12000})
    @IsNumber()
    price: number;

    @ApiProperty({example:24})
    @IsNumber()
    duration: number;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    businessId: string;
    
    appointment: Appointment[];

}
