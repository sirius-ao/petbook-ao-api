// src/domain/pet/pet.service.ts
import { Injectable, NotFoundException, Logger, OnModuleInit } from '@nestjs/common';
import { PetRepository } from './Pet.Repository';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { WhatsappService } from '../client/notification/whatsapp.service';
import { OpenAIService } from '../openai/openai.service';

@Injectable()
export class PetService implements OnModuleInit {
  [x: string]: any;
  private readonly logger = new Logger(PetService.name);

  constructor(
    private readonly petRepository: PetRepository,
    private readonly whatsappService: WhatsappService,
    private readonly openAIService: OpenAIService,
  ) {}

  async onModuleInit() {
    this.startFeedingAlerts();
    this.startVaccineAlerts();
  }

  async create(dto: CreatePetDto) {
    const pet = await this.petRepository.create(dto);

    if (pet.client?.phone) {
      const message = await this.openAIService.generateAlertMessage(
        pet.name,
        'feeding',
        'Novo pet cadastrado!',
      );
      await this.whatsappService.sendMessage(pet.client.phone, message);
      this.logger.log(`Mensagem de cadastro enviada para ${pet.client.name}`);
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

  /** ALERTAS AUTOMÁTICOS DE ALIMENTAÇÃO */
  private startFeedingAlerts() {
    setInterval(async () => {
      const pets = await this.petRepository.findAllWithClient();
      const now = new Date();

      for (const pet of pets) {
        if (!pet.lastFedAt || !pet.client?.phone) continue;

        const minutesSinceFed = (now.getTime() - pet.lastFedAt.getTime()) / 1000 / 60;
        if (minutesSinceFed >= 2) { // alert every 2 minutes
          const message = await this.openAIService.generateAlertMessage(
            pet.name,
            'feeding',
            `Já se passaram ${Math.floor(minutesSinceFed)} minutos desde a última alimentação.`,
          );
          try {
            await this.whatsappService.sendMessage(pet.client.phone, message);
            this.logger.log(`Alerta de alimentação enviado para ${pet.client.name}`);
          } catch (err) {
            this.logger.error(`Erro ao enviar alerta de alimentação: ${err.message}`);
          }
        }
      }
    }, 2 * 60 * 1000);
  }

  /** ALERTAS AUTOMÁTICOS DE VACINA */
  private startVaccineAlerts() {
    setInterval(async () => {
      const pets = await this.petRepository.findAllWithClient();
      const now = new Date();

      for (const pet of pets) {
        if (!pet.nextVaccineDate || !pet.client?.phone) continue;

        const minutesUntilVaccine =
          (new Date(pet.nextVaccineDate).getTime() - now.getTime()) / 1000 / 60;

        if (minutesUntilVaccine <= 1) { // alert 1 min before
          const message = await this.openAIService.generateAlertMessage(
            pet.name,
            'vaccine',
            `A vacina está marcada para agora.`,
          );
          try {
            await this.whatsappService.sendMessage(pet.client.phone, message);
            this.logger.log(`Alerta de vacina enviado para ${pet.client.name}`);
          } catch (err) {
            this.logger.error(`Erro ao enviar alerta de vacina: ${err.message}`);
          }
        }
      }
    }, 1 * 60 * 1000);
  }

  /** MÉTODO PARA RESPOSTAS PERSONALIZADAS DO CLIENTE */
  async handleClientQuestion(petId: number, question: string) {
    const pet = await this.findOne(petId);
    if (!pet.client?.phone) return;

    const message = await this.openAIService.generateAlertMessage(
      pet.name,
      'custom',
      question,
    );

    try {
      await this.whatsappService.sendMessage(pet.client.phone, message);
      this.logger.log(`Resposta ao cliente ${pet.client.name} enviada.`);
    } catch (err) {
      this.logger.error(`Erro ao enviar resposta ao cliente: ${err.message}`);
    }
  }
}
