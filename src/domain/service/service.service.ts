import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServiceService {
  // Assuming you have a PrismaService or similar to interact with the database
  constructor(private readonly prisma: PrismaService) {}
  create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({
      data: {
        name: createServiceDto.name, // Assuming name is part of the DTO
        // description: createServiceDto.description, // Assuming description is part of the DTO
        price: createServiceDto.price, // Assuming price is part of the DTO
        businessId: createServiceDto.businessId, // Assuming businessId is part of the DTO
        duration: createServiceDto.duration, // Assuming duration is part of the DTO
      },
    });
  }

  findAll() {
    return this.prisma.service.findMany({
      include: {
        business: true, // Include related business information
        // appointments: true, // Include related appointments if needed
      },
      // You can include other related entities as needed
    });
  }

  findOne(id: string) {
    return this.prisma.service.findUnique({
      where: { id },
      include: {
        business: true, // Include related business information
        // appointments: true, // Include related appointments if needed
      },
    });
    // If you want to throw an error if not found, you can do so:
    // if (!service) throw new NotFoundException(`Service with id ${id} not found`);
    // return service;
  }

  update(id: string, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.update({
      where: { id },
      data: updateServiceDto,     });
  }

  remove(id: string) {
    return this.prisma.service.delete({
      where: { id },
    });
    // If you want to throw an error if not found, you can do so:
    // if (!service) throw new NotFoundException(`Service with id ${id} not found`);
    // return service;
  }
}
