import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from '../../database/database.module';
import { ClientRepository } from './client.repository';

import { WhatsappModule } from './notification/whatsapp.module';

@Module({
  imports: [DatabaseModule,  WhatsappModule], // adiciona NotificationModule
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
  exports: [ClientService],
})
export class ClientModule {}
