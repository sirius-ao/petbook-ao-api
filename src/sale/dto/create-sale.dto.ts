import { IsNumber, IsString } from 'class-validator';
import { SaleItem } from 'generated/prisma';

export class CreateSaleDto {
  @IsString()
  id: string;

  @IsString()
  clienteId: string;

  @IsString()
  businessId: string;
  item: SaleItem[];

  @IsNumber()
  total: number;
}
