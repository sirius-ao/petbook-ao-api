import { Injectable } from '@nestjs/common';
import { CreateAffiliateReferralDto } from './dto/create-affiliate-referral.dto';
import { UpdateAffiliateReferralDto } from './dto/update-affiliatereferral.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AffiliateReferralService {
  constructor(private readonly prisma: PrismaService){
    
  }
  create(createAffiliateReferralDto: CreateAffiliateReferralDto) {
    return 'This action adds a new affiliateReferral';
  }

  findAll() {
    return `This action returns all affiliateReferral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} affiliateReferral`;
  }

  update(id: number, updateAffiliateReferralDto: UpdateAffiliateReferralDto) {
    return `This action updates a #${id} affiliateReferral`;
  }

  remove(id: number) {
    return `This action removes a #${id} affiliateReferral`;
  }
}
