import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class BusinessService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBusinessDto: CreateBusinessDto) {
    return this.prisma.business.create({
      data: {
        name: createBusinessDto.name,
        address: createBusinessDto.adress, // Corrigido para 'address'
        phone: createBusinessDto.phone,
        email: createBusinessDto.email, 
      }
    });
  }

  async findAll() {
    return this.prisma.business.findMany({
      include: {
        users: true, // nome correto da relação
      },
    });
  }

  async findOne(id: string) {
    const business = await this.prisma.business.findUnique({
      where: { id },
      include: {
        users: true,
        clients: true,
        products: true,
        services: true,
      },
    });

    if (!business) {
      throw new NotFoundException(`Negócio com id ${id} não encontrado`);
    }

    return business;
  }

  async update(id: string, updateBusinessDto: UpdateBusinessDto) {
    return this.prisma.business.update({
      where: { id },
      data: {
        // ...updateBusinessDto,
        // Se você quiser atualizar apenas alguns campos específicos, pode fazer assim:
         name: updateBusinessDto.name,
        // address: updateBusinessDto.address,
       phone: updateBusinessDto.phone,
        email: updateBusinessDto.email,
      }
    });
  }

  async remove(id: string) {
    return this.prisma.business.delete({
      where: { id },
    });
  }
}
