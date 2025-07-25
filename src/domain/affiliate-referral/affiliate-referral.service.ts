import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../database/prisma/prisma.service'
import { CreateAffiliateReferralDto } from './dto/create-affiliate-referral.dto'
import { UpdateAffiliateReferralDto } from './dto/update-affiliatereferral.dto'

@Injectable()
export class AffiliateReferralService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAffiliateReferralDto) {
    return this.prisma.affiliateReferral.create({
      data: {
        affiliateId: dto.affiliated,
        referredUserId: dto.referredUserId,
        type: dto.type,
        value: dto.value,
        status: dto.status,
      },
    })
  }

  async findAll() {
    return this.prisma.affiliateReferral.findMany({
      include: {
        affiliate: true, // para trazer informações do afiliado
      },
    })
  }

  async findOne(id: string) {
    const referral = await this.prisma.affiliateReferral.findUnique({
      where: { id },
      include: {
        affiliate: true,
      },
    })
    if (!referral) {
      throw new NotFoundException(`Referral com id ${id} não encontrado`)
    }
    return referral
  }

  async update(id: string, dto: UpdateAffiliateReferralDto) {
    // garante que existe
    await this.findOne(id)
    return this.prisma.affiliateReferral.update({
      where: { id },
      data: {
        affiliateId: dto.affiliated,
        referredUserId: dto.referredUserId,
        type: dto.type,
        value: dto.value,
        status: dto.status,
      },
    })
  }

  async remove(id: string) {
    // garante que existe
    await this.findOne(id)
    return this.prisma.affiliateReferral.delete({ where: { id } })
  }
}
