import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Adicionar produto' })
  @ApiResponse({ status: 201, description: 'Adicionar produto' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Listar todos Produtos ' })
  @ApiOkResponse({
    description: 'Listar todos Produtos',
    type: CreateProductDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiOperation({ summary: 'Detalhes do Produto ' })
  @ApiOkResponse({
    description: 'Detalhes do Produto ',
    type: CreateProductDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar produto' })
  @ApiOkResponse({
    description: 'Atualizar produto',
    type: CreateProductDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Remover produto' })
  @ApiOkResponse({
    description: 'Remover produto',
    type: CreateProductDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  // deve ter uma feature no produto que permite o cadastro massivo de produto,
  // tipo carregar um excell com um formato ja definio de  produtos att nao tem iamgem dos produtos
}
