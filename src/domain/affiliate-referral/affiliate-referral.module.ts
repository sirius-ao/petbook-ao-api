import { Module } from '@nestjs/common';
import { AffiliateReferralService } from './affiliate-referral.service';
import { AffiliateReferralController } from './affiliate-referral.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AffiliateReferralController],
  providers: [AffiliateReferralService],
  exports:[]
})
export class AffiliateReferralModule {}
