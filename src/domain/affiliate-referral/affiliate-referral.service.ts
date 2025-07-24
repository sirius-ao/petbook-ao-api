
import { Body, Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { CreateAffiliateReferralDto } from './dto/create-affiliate-referral.dto';
import { UpdateAffiliateReferralDto } from './dto/update-affiliatereferral.dto';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class AffiliateReferralService {
  affiliateReferralService: any;
  constructor(private readonly prisma: PrismaService){
    
  }
  @Post()
  create(@Body() createAffiliateReferralDto: CreateAffiliateReferralDto) {
    return this.affiliateReferralService.create(createAffiliateReferralDto);
  }

  @Get()
  findAll() {
    return this.affiliateReferralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affiliateReferralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffiliateReferralDto: UpdateAffiliateReferralDto) {
    return this.affiliateReferralService.update(+id, updateAffiliateReferralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affiliateReferralService.remove(+id);
  }
}
