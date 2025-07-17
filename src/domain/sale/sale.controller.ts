import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('sale')
@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @ApiOperation({ summary: 'Registrar venda' })
  @ApiResponse({ status: 201, description: 'Registrar venda' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @ApiOperation({ summary: 'Listar vendas' })
  @ApiOkResponse({
    description: 'Listar vendas',
    type: CreateSaleDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @ApiOperation({ summary: 'Detalhes de venda' })
  @ApiOkResponse({
    description: 'Detalhes de venda',
    type: CreateSaleDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(id);
  }

  // precisamos entender o que esta envolvido em atualizar dados da venda
  @ApiOperation({ summary: 'Atualizar dados da venda' })
  @ApiOkResponse({
    description: 'Atualizar dados da venda',
    type: CreateSaleDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(id, updateSaleDto);
  }

  @ApiOperation({ summary: 'Cancelar Venda' })
  @ApiOkResponse({
    description: 'Cancelar Venda',
    type: CreateSaleDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(id);
  }

  //  GET	/clients/:id/sales	Ver compras de um cliente
}
