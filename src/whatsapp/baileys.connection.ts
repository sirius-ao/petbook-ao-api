import makeWASocket, { useMultiFileAuthState, WASocket } from '@whiskeysockets/baileys';

export async function connectToWhatsApp(): Promise<WASocket> {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('connection.update', (update) => {
    const { connection } = update;
    console.log('Conexão WhatsApp:', connection);
    if (connection === 'open') {
      console.log('✅ WhatsApp conectado com sucesso!');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  return sock;
}
