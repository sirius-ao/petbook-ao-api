import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AffiliateReferralService } from './affiliate-referral.service';
import { CreateAffiliateReferralDto } from './dto/create-affiliate-referral.dto';
import { UpdateAffiliateReferralDto } from './dto/update-affiliatereferral.dto';

@Controller('affiliate-referral')
export class AffiliateReferralController {
  constructor(private readonly affiliateReferralService: AffiliateReferralService) {}

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
