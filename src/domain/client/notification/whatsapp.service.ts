import { Injectable, OnModuleInit } from '@nestjs/common';
import makeWASocket, { useMultiFileAuthState, WASocket } from '@whiskeysockets/baileys';
import * as qrcode from 'qrcode-terminal';

@Injectable()
export class WhatsappService implements OnModuleInit {
  [x: string]: any;
  private sock: WASocket;

  async onModuleInit() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    this.sock = makeWASocket({
      auth: state,
    });

    this.sock.ev.on('connection.update', ({ connection, qr }) => {
      if (qr) {
        console.log('📲 Escaneie este QR para conectar ao WhatsApp:');
        qrcode.generate(qr, { small: true });
      }

      console.log('Conexão WhatsApp:', connection);
      if (connection === 'open') {
        console.log('✅ WhatsApp conectado com sucesso!');
      }
    });

    this.sock.ev.on('creds.update', saveCreds);
  }

  async sendWhatsapp(phone: string, message: string) {
    if (!this.sock) throw new Error('WhatsApp não está conectado.');

    const jid = `${phone.replace(/\D/g, '')}@s.whatsapp.net`;
    await this.sock.sendMessage(jid, { text: message });
  }
}
