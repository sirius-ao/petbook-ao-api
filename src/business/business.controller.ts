import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('business')
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @ApiOperation({summary: 'Cadastro e gestão de clínicas/petshops'})
  @ApiResponse({status: 201, description: '	Cadastrar novo Negocio'})
  @ApiBadRequestResponse({description: 'Bad Payload send'})
  @ApiResponse({status: 403, description: 'Forbiden'})
  @Post()
  create(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessService.create(createBusinessDto);
  }


 @ApiOperation({summary: 'Listar negócios'})
  @ApiOkResponse({description:'Listar negócios', type: CreateBusinessDto})
  @ApiNotFoundResponse({description:'Not Found'})
  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  @ApiOperation({summary: 'Ver detalhes negocios'})
  @ApiOkResponse({description:'Ver detalhes negocios', type: CreateBusinessDto})
  @ApiNotFoundResponse({description:'Not Found'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessService.findOne(id);
  }

   @ApiOperation({summary: 'Atualizar informações'})
    @ApiOkResponse({description:'Atualizar informações', type: CreateBusinessDto})
    @ApiNotFoundResponse({description:'Not Found'})
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return this.businessService.update(id, updateBusinessDto);
  }

   @ApiOperation({summary: 'Deletar negócios'})
    @ApiOkResponse({description:'Deletar negócios ', type: CreateBusinessDto})
    @ApiNotFoundResponse({description:'Not Found'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(id);
  }
}
