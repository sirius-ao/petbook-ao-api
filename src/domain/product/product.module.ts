import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule], // Import any necessary modules here, e.g., PrismaModule if needed
  controllers: [ProductController],
  providers: [ProductService],
  exports:[]
})
export class ProductModule {}
