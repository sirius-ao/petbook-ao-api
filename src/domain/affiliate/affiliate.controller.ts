import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AffiliateService } from './affiliate.service';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@ApiTags('affiliate')
@Controller('affiliate')
export class AffiliateController {
  constructor(private readonly affiliateService: AffiliateService) {}

  @ApiOperation({ summary: 'Criar registro de afiliado' })
  @ApiResponse({ status: 201, description: 'Criar registro de afiliado' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createAffiliateDto: CreateAffiliateDto) {
    return this.affiliateService.create(createAffiliateDto);
  }

  @ApiOperation({ summary: 'Ver todos afiliados ' })
  @ApiOkResponse({
    description: 'Ver todos afiliados',
    type: CreateAffiliateDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.affiliateService.findAll();
  }

  @ApiOperation({ summary: 'Ver Especifico afiliados ' })
  @ApiOkResponse({
    description: 'Ver Especifico afiliados',
    type: CreateAffiliateDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affiliateService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar dados afiliados ' })
  @ApiOkResponse({
    description: 'Atualizar dados afiliados ',
    type: CreateAffiliateDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAffiliateDto: UpdateAffiliateDto,
  ) {
    return this.affiliateService.update(id, updateAffiliateDto);
  }

  @ApiOperation({ summary: 'Desativar dados afiliados ' })
  @ApiOkResponse({
    description: 'Desativar dados afiliados',
    type: CreateAffiliateDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affiliateService.remove(id);
  }

  // PATCH	/affiliates/point/:id	     Atualizar ganhos
}
