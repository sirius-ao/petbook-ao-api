import { Injectable } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleItemService {
  // Assuming you have a PrismaService or similar to interact with the database
  constructor(private readonly prisma: PrismaService) {}
  create(createSaleItemDto: CreateSaleItemDto) {
    return this.prisma.saleItem.create({
      data: {
        saleId: createSaleItemDto.saleId, // Assuming saleId is part of the DTO
        productId: createSaleItemDto.productId, // Assuming productId is part of the DTO
        quantity: createSaleItemDto.quantity, // Quantity of the product in the sale
        price: createSaleItemDto.price, // Price of the product in the sale
      },
    });
  }

  findAll() {
    return this.prisma.saleItem.findMany({
      include: {
        sale: true, // Include related sale information
        product: true, // Include related product information
      },
    });
  }

  findOne(id: string) {
    return this.prisma.saleItem.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSaleItemDto: UpdateSaleItemDto) {
    return this.prisma.saleItem.update({
      where: { id },
      data: updateSaleItemDto, // Update the sale item with the provided data
    });
  }

  remove(id: string) {
    return this.prisma.saleItem.delete({
      where: { id },
    });
  }
}
