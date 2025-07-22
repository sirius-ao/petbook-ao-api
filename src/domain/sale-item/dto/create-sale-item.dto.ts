import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateSaleItemDto {

    @ApiProperty({example:'01010e0w'})
    @IsString()
    id: string;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    saleId: string;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    productId: string;

    @ApiProperty({example:24})
    @IsNumber()
    quantity:number;

    @ApiProperty({example:30500})
    @IsNumber()
    price:number;


}
