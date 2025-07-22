import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {} // Inject Prisma service for database operations
  create(createSaleDto: CreateSaleDto) {
    return this.prisma.sale.create({
      data: {
        clientId: createSaleDto.clienteId,

        businessId: createSaleDto.businessId, // Assuming businessId is part of the DTO
        total: createSaleDto.total, // Total amount of the sale
      },
    });
  }

  findAll() {
    return this.prisma.sale.findMany({
      include: {
        client: true, // Include related client information
        business: true, // Include related business information
      },
    });
  }

  findOne(id: string) {
    return this.prisma.sale.findUnique({
      where: { id },
      include: {
        client: true, // Include related client information
        business: true, // Include related business information
      },
    });
    // If you want to throw an error if not found, you can do so:
    if (Sale) throw new NotFoundException(`Sale with id ${id} not found`);
    return Sale;
  }

  update(id: string, updateSaleDto: UpdateSaleDto) {
    return this.prisma.sale.update({
      where: { id },
      data: updateSaleDto, // Update the sale with the provided data
    });
  }

  remove(id: string) {
    return this.prisma.sale.delete({
      where: { id },
    });
  }
}
