import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SaleRepository } from './sale.repository';

@Injectable()
export class SaleService {
  constructor(private readonly saleRepository: SaleRepository) {}

  create(createSaleDto: CreateSaleDto) {
    return this.saleRepository.create(createSaleDto);
  }

  findAll() {
    return this.saleRepository.findAll();
  }

  findOne(id: number) {
    return this.saleRepository.findById(id);
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.saleRepository.update(id, updateSaleDto);
  }

  remove(id: number) {
    return this.saleRepository.remove(id);
  }
}
