import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './ jwt-auth.guard';
import { RolesGuard } from './ roles.guard';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/domain/user/user.module';

//import { UserModule } from '../user/user.module';
//import { PrismaModule } from '../database/prisma/prisma.module';
//import { CommonModule } from 'src/common/common.module';
@Module({
  imports: [
    ConfigModule, // ou ConfigModule.forRoot() no AppModule
    UserModule,
    DatabaseModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, RolesGuard],
  controllers: [AuthController],
})
export class AuthModule {}
