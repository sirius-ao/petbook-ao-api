// src/domain/pet/pet.service.ts
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PetRepository } from './Pet.Repository';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { WhatsappService } from '../client/notification/whatsapp.service';

@Injectable()
export class PetService {
  private readonly logger = new Logger(PetService.name);

  constructor(
    private readonly petRepository: PetRepository,
    private readonly whatsappService: WhatsappService,
  ) {}

  async create(dto: CreatePetDto) {
    const pet = await this.petRepository.create(dto);

    if (pet.client?.phone) {
      const message = `🐾 Novo pet cadastrado: ${pet.name}, ${pet.species} - ${pet.breed}`;
      await this.whatsappService.sendMessage(pet.client.phone, message);
    }

    return pet;
  }

  async findAll() {
    return this.petRepository.findAll();
  }

  async findPetsByClientId(clienteId: number) {
    const pets = await this.petRepository.findPetsByClientId(clienteId);
    if (!pets || pets.length === 0)
      throw new NotFoundException(`Nenhum pet encontrado para o cliente ${clienteId}`);
    return pets;
  }

  async findOne(id: number) {
    const pet = await this.petRepository.findOne(id);
    if (!pet) throw new NotFoundException(`Pet com id ${id} não encontrado`);
    return pet;
  }

  async update(id: number, dto: UpdatePetDto) {
    return this.petRepository.update(id, dto);
  }

  async remove(id: number) {
    return this.petRepository.remove(id);
  }

  async updateLastFed(petId: number) {
    return this.petRepository.updateLastFed(petId, new Date());
  }

  async checkFeedingAlerts() {
    const pets = await this.petRepository.findAllWithClient();
    const now = new Date();

    for (const pet of pets) {
      if (!pet.lastFedAt || !pet.client?.phone) continue;

      const hoursSinceFed = (now.getTime() - pet.lastFedAt.getTime()) / 1000 / 3600;

      if (hoursSinceFed >= 6) {
        const message = `🐾 Alerta: ${pet.name} não foi alimentado nas últimas ${Math.floor(
          hoursSinceFed,
        )}h!`;
        try {
          await this.whatsappService.sendMessage(pet.client.phone, message);
          this.logger.log(`Mensagem enviada para ${pet.client.name}`);
        } catch (err) {
          this.logger.error(`Erro ao enviar mensagem: ${err.message}`);
        }
      }
    }
  }
}
