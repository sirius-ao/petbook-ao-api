import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';

@Injectable()
export class SaleItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSaleItemDto) {
    return this.prisma.saleItem.create({
      data: {
        saleId: data.saleId,
        productId: data.productId,
        quantity: data.quantity,
        price: data.price,
      },
    });
  }

  async findAll() {
    return this.prisma.saleItem.findMany({
      include: {
        sale: true,
        product: true,
      },
    });
  }

  async findById(id: number) {
    const saleItem = await this.prisma.saleItem.findUnique({
      where: { id },
      include: {
        sale: true,
        product: true,
      },
    });

    if (!saleItem) {
      throw new NotFoundException(`Item da venda com id ${id} não encontrado`);
    }

    return saleItem;
  }

  async update(id: number, data: UpdateSaleItemDto) {
    return this.prisma.saleItem.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.saleItem.delete({
      where: { id },
    });
  }
}
