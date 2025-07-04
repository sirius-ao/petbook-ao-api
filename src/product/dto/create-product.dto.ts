import { IsNumber, IsString } from "class-validator";
import { SaleItem } from "generated/prisma";

export class CreateProductDto {

    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsNumber
    price: number;

     @IsNumber
    stock: number;

    @IsString()
    businessId: String;
    
    salemItem: SaleItem[];

}
