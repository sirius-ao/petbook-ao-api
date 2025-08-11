import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('sale-item')
@Controller('sale-item')
export class SaleItemController {
  constructor(private readonly saleItemService: SaleItemService) {}

  @ApiOperation({ summary: 'Registrar Item de Venda' })
  @ApiResponse({ status: 201, description: 'Registrar Item de Venda' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createSaleItemDto: CreateSaleItemDto) {
    return this.saleItemService.create(createSaleItemDto);
  }

  @ApiOperation({ summary: 'Ver todos Item de Venda' })
  @ApiOkResponse({
    description: 'Ver todos Item de Venda',
    type: CreateSaleItemDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.saleItemService.findAll();
  }

  @ApiOperation({ summary: 'Ver Item de Venda Especifico' })
  @ApiOkResponse({
    description: 'Ver Item de Venda Especifico',
    type: CreateSaleItemDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.saleItemService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar Item de Venda ' })
  @ApiOkResponse({
    description: 'Atualizar Item de Venda',
    type: CreateSaleItemDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSaleItemDto: UpdateSaleItemDto,
  ) {
    return this.saleItemService.update(id, updateSaleItemDto);
  }

  @ApiOperation({ summary: 'Cancelar Item de Venda' })
  @ApiOkResponse({
    description: 'Cancelar Item de Venda',
    type: CreateSaleItemDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.saleItemService.remove(id);
  }
}
