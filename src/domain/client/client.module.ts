import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from '../../database/database.module';
import { ClientRepository } from './client.repository';
import { NotificationModule } from './notification/notification.module'; // importar
import { WhatsappModule } from './notification/whatsapp.module';

@Module({
  imports: [DatabaseModule, NotificationModule, WhatsappModule], // adiciona NotificationModule
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
  exports: [ClientService],
})
export class ClientModule {}
