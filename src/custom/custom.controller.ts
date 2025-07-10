import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomService } from './custom.service';
import { AskAIDto } from './dto/ask-ai.dto';

@Controller('custom')
export class CustomController {
  constructor(private readonly customService: CustomService) {}

  @Post('ask-ai')
  @UsePipes(new ValidationPipe())
  async askAI(@Body() body: AskAIDto) {
    const answer = await this.customService.askAI(body.question);
    return { answer };
  }
}
