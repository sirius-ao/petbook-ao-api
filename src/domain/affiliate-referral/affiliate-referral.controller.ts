import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AffiliateReferralService } from './affiliate-referral.service';
import { CreateAffiliateReferralDto } from './dto/create-affiliate-referral.dto';
import { UpdateAffiliateReferralDto } from './dto/update-affiliatereferral.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('affiliate-referral')
@Controller('affiliate-referral')
export class AffiliateReferralController {
  constructor(
    private readonly affiliateReferralService: AffiliateReferralService,
  ) {}

  @ApiOperation({ summary: 'Registrar nova indicação' })
  @ApiResponse({ status: 201, description: 'Registrar nova indicação' })
  @ApiBadRequestResponse({ description: 'Bad Payload send' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Post()
  create(@Body() createAffiliateReferralDto: CreateAffiliateReferralDto) {
    return this.affiliateReferralService.create(createAffiliateReferralDto);
  }

  @ApiOperation({ summary: 'Ver todas Indicacoes' })
  @ApiOkResponse({
    description: 'Ver todas Indicacoes',
    type: CreateAffiliateReferralDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get()
  findAll() {
    return this.affiliateReferralService.findAll();
  }

  @ApiOperation({ summary: 'Ver Especifica Indicacao' })
  @ApiOkResponse({
    description: 'Ver Especifica Indicacao',
    type: CreateAffiliateReferralDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affiliateReferralService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar status/valor Indicacao ' })
  @ApiOkResponse({
    description: 'Atualizar status/valor Indicacao',
    type: CreateAffiliateReferralDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAffiliateReferralDto: UpdateAffiliateReferralDto,
  ) {
    return this.affiliateReferralService.update(
      id,
      updateAffiliateReferralDto,
    );
  }

  @ApiOperation({ summary: 'Cancelar Indicacao ' })
  @ApiOkResponse({
    description: 'Cancelar Indicacao',
    type: CreateAffiliateReferralDto,
  })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affiliateReferralService.remove(id);
  }

  // GET	/affiliates/:id/referrals	Ver por afiliado específico
}
