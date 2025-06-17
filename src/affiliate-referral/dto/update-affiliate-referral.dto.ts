import { PartialType } from '@nestjs/mapped-types';
import { CreateAffiliateReferralDto } from './create-affiliate-referral.dto';

export class UpdateAffiliateReferralDto extends PartialType(CreateAffiliateReferralDto) {}
