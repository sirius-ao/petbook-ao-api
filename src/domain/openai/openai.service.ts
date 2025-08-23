// src/whatsapp/openai.service.ts
import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private readonly logger = new Logger(OpenAIService.name);
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // coloque sua chave no .env
    });
  }

  /**
   * Gera uma mensagem de alerta inteligente para WhatsApp
   * @param petName Nome do pet
   * @param alertType Tipo de alerta: 'feeding', 'vaccine' ou 'custom'
   * @param extra Informação adicional ou pergunta do cliente
   */
  async generateAlertMessage(
    petName: string,
    alertType: 'feeding' | 'vaccine' | 'custom',
    extra?: string,
  ): Promise<string> {
    let prompt = '';

    if (alertType === 'feeding') {
      prompt = `Crie uma mensagem curta, amigável e urgente para um cliente lembrando que seu pet chamado ${petName} precisa ser alimentado agora. Inclua recomendações se possível.`;
    } else if (alertType === 'vaccine') {
      prompt = `Crie uma mensagem curta, amigável e urgente para um cliente lembrando que seu pet chamado ${petName} precisa tomar a vacina. Inclua recomendações sobre cuidados pós-vacina se necessário.`;
    } else if (alertType === 'custom' && extra) {
      prompt = `O cliente perguntou: "${extra}". Responda de forma clara, amigável e com recomendações para cuidar do pet ${petName}.`;
    }

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Você é um assistente inteligente de mensagens para WhatsApp de clínica veterinária. Suas respostas devem ser amigáveis, curtas e úteis.',
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 120,
      });

      const text = completion.choices[0]?.message?.content;
      return text?.trim() || `🐾 Alerta do pet ${petName}!`;
    } catch (err) {
      this.logger.error(`Erro ao gerar mensagem OpenAI: ${err.message}`);
      return alertType === 'feeding'
        ? `🐾 ${petName} precisa ser alimentado!`
        : alertType === 'vaccine'
        ? `💉 ${petName} precisa tomar a vacina!`
        : `🐾 ${petName} precisa de atenção!`;
    }
  }
}
