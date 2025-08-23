import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';

@Injectable()
export class AffiliateService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAffiliateDto) {
    return this.prisma.affiliate.create({
      data: {
        userId: dto.userId,
        code: dto.code,
        earnings: dto.earning ?? 0,
      },
    });
  }

  async findAll() {
    return this.prisma.affiliate.findMany({
      include: {
        user: true, // traz informações do usuário vinculado
        AffiliateReferral: true, // traz referrals relacionados
      },
    });
  }

  async findOne(id: number) {
    const affiliate = await this.prisma.affiliate.findUnique({
      where: { id },
      include: {
        user: true,
        AffiliateReferral: true,
      },
    });

    if (!affiliate) {
      throw new NotFoundException(`Affiliate com id ${id} não encontrado`);
    }

    return affiliate;
  }

  async update(id: number, dto: UpdateAffiliateDto) {
    // garante que existe
    await this.findOne(id);
    return this.prisma.affiliate.update({
      where: { id },
      data: {
        userId: dto.userId,
        code: dto.code,
        earnings: dto.earning,
      },
    });
  }

  async remove(id: number) {
    // garante que existe
    await this.findOne(id);
    return this.prisma.affiliate.delete({ where: { id } });
  }
}
