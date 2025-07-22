import { Module } from '@nestjs/common';
import { AffiliateService } from './affiliate.service';
import { AffiliateController } from './affiliate.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AffiliateController],
  providers: [AffiliateService],
  exports:[]
})
export class AffiliateModule {}
