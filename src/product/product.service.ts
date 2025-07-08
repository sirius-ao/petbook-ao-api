import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        price: createProductDto.price,
        // description: createProductDto.description,
        stock: createProductDto.stock,
        businessId: createProductDto.businessId, // Assuming businessId is part of the DTO
               // imageUrl: createProductDto.imageUrl, // URL to the product image
        // categoryId: createProductDto.categoryId, // Assuming you have a categoryId to link
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: {
        business: true, // Include related business information{};
      },
      // You can include other related entities as needed
    });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        business: true, // Include related business information
      },
    });
    // If you want to throw an error if not found, you can do so:
    if (!Product)
      throw new NotFoundException(`Product with id ${id} not found`);
    return Product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto, // Update the product with the provided data
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
