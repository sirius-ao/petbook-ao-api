import { ApiProperty } from '@nestjs/swagger';

export class MedicalRecordSummaryDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: String, format: 'date-time' })
  date: Date;

  @ApiProperty({ required: false })
  visitType?: string;

  @ApiProperty({ required: false, description: 'Resumo curto (descrição + diagnóstico)' })
  resumoVeterinario?: string;

  @ApiProperty({ required: false, description: 'Informação do veterinário' })
  vet?: { id: number; name: string; email?: string; role?: string };
}
