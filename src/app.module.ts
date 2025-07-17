import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PrismaModule } from './database/prisma/prisma.module';
import { CustomModule } from './custom/custom.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
   // PrismaModule,
    CustomModule,
    AuthModule,
    CommonModule,
    DatabaseModule,
    ConfigModule,
    DomainModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
