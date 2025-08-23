import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateSaleItemDto {

    // @ApiProperty({example:'01010e0w'})
    // @IsString()
    // id: string;

    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    saleId: number;

    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    productId: number;

    @ApiProperty({example:24})
    @IsNumber()
    quantity:number;

    @ApiProperty({example:30500})
    @IsNumber()
    price:number;


}
