import { Module } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { JwtModule } from '@nestjs/jwt';
import { WsJwtGuard } from './ws-jwt.guard';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.JWT_SECRET || 'secret' }),
  ],
  providers: [NotificationGateway, WsJwtGuard],
  exports: [NotificationGateway],
})
export class NotificationModule {}
