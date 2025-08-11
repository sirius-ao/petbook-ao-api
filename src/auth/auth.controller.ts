// auth.controller.ts
import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './ jwt-auth.guard';
import { Roles } from './roles.decorator';
import { Request } from 'express';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

//@ApiTags('Protected')
@ApiTags('auth')
@ApiBearerAuth('access-token') // Apply the security scheme to the entire controller
//@UseGuards(JwtAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    const user = req.user as any;
    return this.authService.profile(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Req() req: Request) {
    const user = req.user as any;
    return this.authService.logout(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  refresh(@Req() req: Request) {
    const user = req.user as any;
    const token = req.headers['x-refresh-token'] as  string;
    return this.authService.refresh(user.id, token);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @Get('admin-only')
  adminRoute() {
    return { message: 'Acesso permitido somente para ADMIN' };
  }
}

