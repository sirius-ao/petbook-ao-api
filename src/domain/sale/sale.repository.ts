import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SaleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSaleDto) {
    return this.prisma.sale.create({
      data: {
        clientId: data.clienteId,
        businessId: data.businessId,
        total: data.total,
      },
    });
  }

  async findAll() {
    return this.prisma.sale.findMany({
      include: {
        client: true,
        business: true,
      },
    });
  }

  async findById(id: number) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: {
        client: true,
        business: true,
      },
    });

    if (!sale) {
      throw new NotFoundException(`Venda com id ${id} não encontrada`);
    }

    return sale;
  }

  async update(id: number, data: UpdateSaleDto) {
    return this.prisma.sale.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.sale.delete({
      where: { id },
    });
  }
}
