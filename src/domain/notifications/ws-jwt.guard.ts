import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';

@Injectable()
export class WsJwtGuard implements CanActivate {
  private readonly logger = new Logger(WsJwtGuard.name);

  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client: Socket = context.switchToWs().getClient<Socket>();
    const token = client.handshake.auth?.token as string | undefined;

    if (!token) {
      this.logger.warn('WebSocket sem token');
      return false;
    }

    try {
      const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
      // injeta o payload no handshake para uso posterior
      (client.handshake as any).user = payload;
      return true;
    } catch (err) {
      this.logger.warn('Token inválido no handshake WS');
      return false;
    }
  }
}

