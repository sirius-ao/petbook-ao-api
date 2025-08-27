import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import makeWASocket, { useMultiFileAuthState, WAMessage } from '@whiskeysockets/baileys';
import * as qrcode from 'qrcode-terminal';

@Injectable()
export class WhatsappService implements OnModuleInit {
  private socket: ReturnType<typeof makeWASocket> | null = null;
  private readonly logger = new Logger(WhatsappService.name);

  /**
   * Inicializa conexão com WhatsApp (Baileys). O QR será exibido no console.
   * Em produção, armazene credenciais com segurança.
   */
  async onModuleInit() {
    try {
      const { state, saveCreds } = await useMultiFileAuthState('wa_auth');
      this.socket = makeWASocket({
        auth: state,
        printQRInTerminal: false,
      });

      this.socket.ev.on('creds.update', saveCreds);

      this.socket.ev.on('connection.update', (update) => {
        const { qr, connection } = update as any;
        if (qr) {
          this.logger.log('📱 Escaneie o QR do WhatsApp (terminal):');
          qrcode.generate(qr, { small: true });
        }
        if (connection === 'open') {
          this.logger.log('✅ WhatsApp conectado via Baileys');
        }
      });
    } catch (err) {
      this.logger.error('Erro ao iniciar Baileys', err as any);
    }
  }

  /**
   * Envia mensagem de texto para número no formato internacional sem '+'.
   * Ex.: phone = '244912345678'
   */
  async sendMessage(phone: string, text: string) {
    if (!this.socket) throw new Error('WhatsApp não conectado');
    const jid = phone.includes('@') ? phone : `${phone}@s.whatsapp.net`;
    await this.socket.sendMessage(jid, { text });
    this.logger.log(`📲 Mensagem enviada para ${phone}`);
  }
}
