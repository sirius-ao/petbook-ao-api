import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import * as ExcelJS from 'exceljs';
import { ProductImport  } from './dto/interface-product.dto';
import { count } from 'console';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        price: createProductDto.price,
        // description: createProductDto.description,
        stock: createProductDto.stock,
        businessId: createProductDto.businessId, // Assuming businessId is part of the DTO
               // imageUrl: createProductDto.imageUrl, // URL to the product image
        // categoryId: createProductDto.categoryId, // Assuming you have a categoryId to link
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: {
        business: true, // Include related business information{};
      },
      // You can include other related entities as needed
    });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        business: true, // Include related business information
      },
    });
    // If you want to throw an error if not found, you can do so:
    if (!Product)
      throw new NotFoundException(`Product with id ${id} not found`);
    return Product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto, // Update the product with the provided data
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

// Serviço para processar arquivo Excel com muitos produtos / multi-cadastro
// A ordem das colunas seja: nome, preço, estoque, categoria, descrição

async importFromExcel(filePath: string){
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.worksheets[0];
    const products: ProductImport [] = []; 

    const rowPromises: Promise<void>[] = [];

   worksheet.eachRow({includeEmpty: false},(row, rowNumber)=>{
      if( rowNumber === 1 ) return; // pula cabeçalho

      const processRow = async ()=>{

          const getCellValue = (cellNumber: number) => {
            const cell = row.getCell(cellNumber);
            return cell.value ? cell.value.toString() : '';
          };

          const getNumericValue = (cellNumber: number) => {
          const value = row.getCell(cellNumber).value;
            return typeof value === 'number' ? value : 0;
          };

            const product: ProductImport = {
            name: getCellValue(1),
            price: getNumericValue(2),
            stock: getNumericValue(3),
            category: row.getCell(4)?.text ,
            description: row.getCell(5)?.text,
            businessId: row.getCell(6)?.text,
          };

      if(product.name && !isNaN(product.price) && !isNaN(product.stock)){
        products.push(product);
      } 
    };

      rowPromises.push(processRow());
    });

    if(products.length ===0) {
          throw new BadRequestException('Nenhum produto válido encontrado no arquivo');
    }
      const result = await this.prisma.product.createMany({
      data: products,
      skipDuplicates: true,
      });

      return {
        message: 'Importação realizada com sucesso',
        count: result.count,
        invalidRows: worksheet.rowCount - products.length - 1
      };


  } catch (error) {
    throw new BadRequestException(
      error.message || 'Erro ao Processar o arquivo Excel'
    )
  }
}


}
