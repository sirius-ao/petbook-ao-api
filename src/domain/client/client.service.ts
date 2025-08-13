import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create(createClientDto);
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(id: number) {
    return this.clientRepository.findById(id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientRepository.remove(id);
  }
}
