import { Module } from '@nestjs/common';
import { AffiliateReferralService } from './affiliate-referral.service';
import { AffiliateReferralController } from './affiliate-referral.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AffiliateReferralController],
  providers: [AffiliateReferralService],
  exports:[]
})
export class AffiliateReferralModule {}
