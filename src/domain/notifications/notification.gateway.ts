import {
  ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect,
  SubscribeMessage, WebSocketGateway, WebSocketServer, 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
// import { UsePipes } from '@nestjs/common';
// import { WsJwtGuard } from './ws-jwt.guard';

/**
 * Notification Gateway - namespace /notifications
 * Usa guard JWT para autenticar handshake.
 */
// @UseGuards(WsJwtGuard)
@WebSocketGateway({
  namespace: '/notifications',
  cors: { origin: ['http://localhost:3000'], credentials: true },
})
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private userSockets = new Map<string, Set<string>>();

  handleConnection(client: Socket) {
    const user = (client.handshake as any).user;
    const userId = user?.sub ? String(user.sub) : undefined;
    const businessId = user?.businessId ? String(user.businessId) : undefined;

    if (userId) {
      if (!this.userSockets.has(userId)) this.userSockets.set(userId, new Set());
      this.userSockets.get(userId)!.add(client.id);
      client.join(`user:${userId}`);
    }
    if (businessId) {
      client.join(`business:${businessId}`);
    }
  }

  handleDisconnect(client: Socket) {
    for (const [userId, ids] of this.userSockets.entries()) {
      if (ids.has(client.id)) {
        ids.delete(client.id);
        if (ids.size === 0) this.userSockets.delete(userId);
        break;
      }
    }
  }

  @SubscribeMessage('ping')
  handlePing(@ConnectedSocket() client: Socket) {
    client.emit('pong', { ok: true, t: Date.now() });
  }

  emitToBusiness(businessId: number | string, event: string, payload: any) {
    this.server.to(`business:${businessId}`).emit(event, payload);
  }

  emitToUser(userId: number | string, event: string, payload: any) {
    this.server.to(`user:${userId}`).emit(event, payload);
  }
}
