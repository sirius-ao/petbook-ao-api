
npm install xlsx

npm install --save @nestjs/platform-express multer

> $ npm install --save @nestjs/platform-express multer xlsx



``` js

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importProducts(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request
  ) {
    // Obtenha o businessId do usuário autenticado
    const businessId = req.user.businessId; // Ajuste conforme sua autenticação
    
    if (!businessId) {
      throw new BadRequestException('Business ID não encontrado');
    }

    return this.productService.importFromExcel(file.path, businessId);
  }
}







async importFromExcel(filePath: string){
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.worksheets[0];
    const products: ImportProductDto[] = []; 


    worksheet.eachRow({includeEmpty: false},(row, rowNumber)=>{
      if( rowNumber === 1 ) return; // pula cabeçalho

      const product = {
        name: row.getCell(1).text || '',
        price: Number(row.getCell(2).value)  || 0,
        stock: Number(row.getCell(3).value)|| 0,
        category: row.getCell(4)?.text || null,
        description: row.getCell(5)?.text || null,
        businessId: row.getCell(6).text || '',
      };

      if(product.name && !isNaN(product.price) && !isNaN(product.stock)){
        products.push(product);
      }

     const result = await this.prisma.product.createMany({
        data: products,
        skipDuplicates: true,
      });

      return {
        message: 'Importação realizada com sucesso',
        count: products.length,
      }


    } )


  } catch (error) {
    throw new BadRequestException(
      error.message || 'Erro ao Processar o arquivo Excel'
    )
  }

```


@Post('import')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (file.mimetype.includes('excel') || file.mimetype.includes('spreadsheet')) {
        cb(null, true);
      } else {
        cb(new Error('Formato de arquivo não suportado'), false);
      }
    },
    limits: {
      fileSize: 1024 * 1024 * 5, // Limite de 5MB
    },
  }))
  async importProducts(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado');
    }
    return this.productService.importFromExcel(file.path);
  }
