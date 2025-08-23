import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('business')
@Controller('business')
export class BusinessController {
  appointmentService: any;
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
  findOne(@Param('id') id: number) {
    return this.businessService.findOne(id);
  }

   @ApiOperation({summary: 'Atualizar informações'})
    @ApiOkResponse({description:'Atualizar informações', type: CreateBusinessDto})
    @ApiNotFoundResponse({description:'Not Found'})
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return this.businessService.update(id, updateBusinessDto);
  }
  

  @ApiOperation({ summary: 'Agenda diária da clínica' })
  @ApiOkResponse({ description: 'Agenda do dia' })
  @Get(':id/agenda')
  dailyAgenda(
    @Param('id') businessId: number,
    @Query('date') date?: string,
  ) {
    const ref = date ? new Date(date) : new Date(); // default: hoje
    return this.appointmentService.dailyAgendaByBusiness(businessId, ref);
  }


   @ApiOperation({summary: 'Deletar negócios'})
    @ApiOkResponse({description:'Deletar negócios ', type: CreateBusinessDto})
    @ApiNotFoundResponse({description:'Not Found'})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.businessService.remove(id);
  }
}
