import { Module } from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { SaleItemController } from './sale-item.controller';
// import { SaleItem } from './entities/sale-item.entity';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [SaleItemController],
  providers: [SaleItemService],
})
export class SaleItemModule {}
