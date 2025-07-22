import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse} from '@nestjs/swagger';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Criar novo usuário'})
  @ApiResponse({status: 201, description: 'novo usuário criado com sucesso.', type: CreateUserDto})
  @ApiBadRequestResponse({description:'Bad Payload send'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({summary: 'Listar todos usuários'})
  @ApiOkResponse({description:'Listar todos usuários', type: CreateUserDto, isArray: true})
  @ApiNotFoundResponse({description:'Not Found'})
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({summary: 'Detalhes de um usuário'})
  @ApiOkResponse({description:'Detalhes de um usuário', type: CreateUserDto})
  @ApiNotFoundResponse({description:'Not Found'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({summary: '	Atualizar dados'})
  @ApiOkResponse({description:'	Atualizar dados', type: CreateUserDto})
  @ApiNotFoundResponse({description:'Not Found'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({summary: 'Remover usuário'})
  @ApiOkResponse({description:'Remover usuário', type: CreateUserDto})
  @ApiNotFoundResponse({description:'Not Found'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
