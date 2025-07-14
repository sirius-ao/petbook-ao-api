
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


$ git tag -a v1.0.0 -m "v1.0.0 (primeira versão estável)"

adilson.futa@AO01LD1FPW0285 MINGW64 /d/Workspace/petbook-ao-api (main)
$ git push 
Everything up-to-date

adilson.futa@AO01LD1FPW0285 MINGW64 /d/Workspace/petbook-ao-api (main)
$ git push origin  v1.0.0
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 190 bytes | 190.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Petbook-ao/petbook-ao-api.git
 * [new tag]         v1.0.0 -> v1.0.0




 Dicas Importantes
Use Semantic Versioning para suas tags:

v1.0.0 (primeira versão estável)

v1.0.1 (pequenas correções)

v1.1.0 (novas funcionalidades compatíveis)

v2.0.0 (mudanças incompatíveis)

Mantenha um arquivo CHANGELOG.md atualizado no seu repositório

Para projetos Node.js, mantenha a versão no package.json sincronizada com as tags

Pronto! Agora você tem uma release profissional no GitHub para seu projeto petbook.ao.