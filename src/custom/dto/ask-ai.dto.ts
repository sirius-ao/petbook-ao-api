import { IsNotEmpty, IsString } from 'class-validator';

export class AskAIDto {
  @IsString()
  @IsNotEmpty()
  question: string;
}
