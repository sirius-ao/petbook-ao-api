import { Module } from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { SaleItemController } from './sale-item.controller';
import { DatabaseModule } from '../../database/database.module';
// import { SaleItem } from './entities/sale-item.entity';


@Module({
  imports: [DatabaseModule],
  controllers: [SaleItemController],
  providers: [SaleItemService],
  exports:[]
})
export class SaleItemModule {}
