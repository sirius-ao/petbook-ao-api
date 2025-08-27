
/* src/ai/ai.service.ts */
import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private logger = new Logger(AiService.name);
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  // Parse a natural-text request into a normalized JSON structure
  async parseReminder(text: string) {
    // Prompt should instruct the model to return strict JSON with keys: title, message, dateTime, repeat, channels, petName, isPrescription, prescription
    const prompt = `You are an assistant that extracts scheduling information from user messages. Return ONLY valid JSON with the following fields (use null if unknown):
{
  "title": string|null,
  "message": string|null,
  "dateTime": string|null,          // ISO 8601 or date/time description
  "repeat": string|null,            // none|daily|weekly|every_8h|every_12h
  "channels": ["email","whatsapp","inapp"] or [],
  "petName": string|null,
  "isPrescription": boolean,
  "prescription": { "name": string, "dose": string, "freqHours": number, "start": string, "end": string } | null
}

Text: ${text}`;

    const res = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You return strict JSON according to the schema.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 600,
    });

    const raw = res.choices?.[0]?.message?.content ?? '{}';
    this.logger.debug(`AI raw response: ${raw}`);

    try {
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (err) {
      this.logger.error('Failed to parse AI response', err);
      // safe fallback: minimal structure
      return {
        title: null,
        message: text,
        dateTime: null,
        repeat: null,
        channels: ['inapp'],
        petName: null,
        isPrescription: false,
        prescription: null,
      };
    }
  }
}
