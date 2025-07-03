import { Module } from '@nestjs/common';
import { AffiliateReferralService } from './affiliate-referral.service';
import { AffiliateReferralController } from './affiliate-referral.controller';

@Module({
  controllers: [AffiliateReferralController],
  providers: [AffiliateReferralService],
})
export class AffiliateReferralModule {}
