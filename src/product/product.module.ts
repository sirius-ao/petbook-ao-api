import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import any necessary modules here, e.g., PrismaModule if needed
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
