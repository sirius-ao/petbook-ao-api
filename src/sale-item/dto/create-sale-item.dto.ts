import { IsNumber } from "class-validator";

export class CreateSaleItemDto {

    @IsString()
    id: string;

    @IsString()
    saleId: string;

    @IsString()
    productId: string;

    @IsNumber()
    quantity:number;

    @IsNumber()
    price:number;


}
