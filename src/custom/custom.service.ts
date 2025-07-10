import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class CustomService {
  private readonly apiKey: string;

  private readonly keywords = [
    'veterinária', 'petshop', 'veterinário', 'animais', 'cães', 'gatos', 'angola', 'clínica', 'vacina'
  ];

  constructor(private readonly configService: ConfigService) {
    const key = this.configService.get<string>('OPENROUTER_API_KEY');
    if (!key) {
      throw new Error('OPENROUTER_API_KEY não definida no .env');
    }
    this.apiKey = key;
  }

  private isRelevantQuestion(question: string): boolean {
    const q = question.toLowerCase();
    return this.keywords.some(keyword => q.includes(keyword));
  }

  async askAI(question: string): Promise<string> {
    // if (!this.isRelevantQuestion(question)) {
    //   return 'Aqui só tratamos assuntos de animais, podes refazer a sua pergunta por favor?';
    // }

    try {
      const prompt = `
Por favor, responda SOMENTE com informações relacionadas a veterinárias, petshops, veterinários e serviços para animais em Angola.
Ignore quaisquer outros assuntos.

Pergunta: ${question}
`;

      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'mistralai/mistral-7b-instruct:free',
          messages: [
            {
              role: 'system',
              content: 'Você é um assistente especializado em veterinária, petshops e veterinários em Angola.'
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'HTTP-Referer': 'http://localhost:3000/',
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data.choices[0].message.content;
    } catch (error: any) {
      console.error('Erro OpenRouter =>', error.response?.data || error.message || error);
      throw new InternalServerErrorException('Erro ao comunicar com a IA (OpenRouter)');
    }
  }
}
