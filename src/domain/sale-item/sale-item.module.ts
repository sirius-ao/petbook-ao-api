import { Module } from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { SaleItemController } from './sale-item.controller';
import { DatabaseModule } from '../../database/database.module';
import { SaleItemRepository } from './sale-item.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [SaleItemController],
  providers: [SaleItemService, SaleItemRepository],
  exports: [SaleItemService],
})
export class SaleItemModule {}
