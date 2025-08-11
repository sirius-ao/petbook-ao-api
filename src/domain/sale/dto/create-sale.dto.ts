import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { SaleItem } from 'generated/prisma';

export class CreateSaleDto {

  // @ApiProperty({example:'01010e0w'})
  // @IsString()
  // id: string;

  @ApiProperty({example:'01010e0w'})
  @IsNumber()
  clienteId: number;

  @ApiProperty({example:'01010e0w'})
  @IsNumber()
  businessId: number;

  item: SaleItem[];

  @ApiProperty({example:121313})
  @IsNumber()
  total: number;
}
