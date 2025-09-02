import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { LembreteService } from './lembrete.service';
import { CreateLembreteDto } from './dto/create-lembrete.dto';
import { UpdateLembreteDto } from './dto/update-lembrete.dto';


@Controller('lembretes')
export class LembreteController {
constructor(private readonly service: LembreteService) {}


@Post()
create(@Body() dto: CreateLembreteDto) {
return this.service.create(dto);
}


@Get()
findAll(@Query('future') future?: string) {
return this.service.findAll(future === 'true');
}


@Get(':id')
findOne(@Param('id') id: string) {
return this.service.findOne(+id);
}


@Put(':id')
update(@Param('id') id: string, @Body() dto: UpdateLembreteDto) {
return this.service.update(+id, dto);
}


@Delete(':id')
remove(@Param('id') id: string) {
return this.service.remove(+id);
}
}