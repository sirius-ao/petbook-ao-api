import { Injectable } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { SaleItemRepository } from './sale-item.repository';

@Injectable()
export class SaleItemService {
  constructor(private readonly saleItemRepository: SaleItemRepository) {}

  create(createSaleItemDto: CreateSaleItemDto) {
    return this.saleItemRepository.create(createSaleItemDto);
  }

  findAll() {
    return this.saleItemRepository.findAll();
  }

  findOne(id: number) {
    return this.saleItemRepository.findById(id);
  }

  update(id: number, updateSaleItemDto: UpdateSaleItemDto) {
    return this.saleItemRepository.update(id, updateSaleItemDto);
  }

  remove(id: number) {
    return this.saleItemRepository.remove(id);
  }
}
