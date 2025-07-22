import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { SaleItem } from "generated/prisma";

export class CreateProductDto {

    @ApiProperty({example:'01010e0w'})
    @IsString()
    id: string;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    name: string;

    @ApiProperty({example:1231312})
    @IsNumber()
    price: number;

    @ApiProperty({example:2123123})
    @IsNumber()
    stock: number;

    @ApiProperty({example:'EU3U3892'})
    @IsString()
    businessId: string; // Assuming businessId is part of the DTO
    
    salemItem: SaleItem[];

}
