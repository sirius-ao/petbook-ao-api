// src/whatsapp/whatsapp.service.ts
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import makeWASocket, { useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import * as qrcode from 'qrcode-terminal';

@Injectable()
export class WhatsappService implements OnModuleInit {
  private readonly logger = new Logger(WhatsappService.name);
  private sock: ReturnType<typeof makeWASocket>;

  async onModuleInit() {
    this.logger.log('🚀 Inicializando WhatsApp...');
    await this.connect();
  }

  async connect() {
    const { state, saveCreds } = await useMultiFileAuthState('whatsapp_auth');

    this.sock = makeWASocket({ auth: state });

    // Atualiza credenciais automaticamente
    this.sock.ev.on('creds.update', saveCreds);

    // Monitorar conexão
    this.sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        this.logger.warn('📲 Escaneie este QR Code para conectar:');
        qrcode.generate(qr, { small: true });
      }

      if (connection === 'close') {
        const shouldReconnect =
          (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
        if (shouldReconnect) {
          this.logger.log('♻️ Tentando reconectar...');
          this.connect();
        } else {
          this.logger.error('❌ Sessão encerrada. Escaneie novamente.');
        }
      }

      if (connection === 'open') {
        this.logger.log('✅ WhatsApp conectado!');
      }
    });
  }

  // Enviar mensagem simples
  async sendMessage(to: string, message: string) {
    if (!this.sock) throw new Error('WhatsApp não conectado');
    const jid = to.includes('@s.whatsapp.net') ? to : `${to}@s.whatsapp.net`;
    await this.sock.sendMessage(jid, { text: message });
  }

  // Mensagem de cadastro de cliente
  async sendClientRegistration(clientName: string, phone: string) {
    const message = `👋 Olá ${clientName}, seu cadastro foi realizado com sucesso!`;
    await this.sendMessage(phone, message);
  }

  // Mensagem de cadastro de pet
  async sendPetRegistration(petName: string, species: string, breed: string, ownerPhone: string) {
    const message = `🐾 Novo Pet cadastrado!\nNome: ${petName}\nEspécie: ${species}\nRaça: ${breed}`;
    await this.sendMessage(ownerPhone, message);
  }

  // Alerta de alimentação do pet
  async sendFeedingAlert(petName: string, ownerName: string, ownerPhone: string, hoursSinceFed: number) {
    const message = `🐾 Alerta: ${petName} não foi alimentado nas últimas ${Math.floor(hoursSinceFed)}h, ${ownerName}!`;
    await this.sendMessage(ownerPhone, message);
  }
}
