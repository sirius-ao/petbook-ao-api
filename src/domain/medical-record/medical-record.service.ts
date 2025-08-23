import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';

@Injectable()
export class MedicalRecordService {
  constructor(private readonly prisma: PrismaService) {}

  // cria novo prontuário (valida vetId se fornecido)
  async create(dto: CreateMedicalRecordDto) {
    // valida vetId se informado
    if (dto.vetId) {
      const vet = await this.prisma.user.findUnique({ where: { id: dto.vetId } });
      if (!vet) throw new BadRequestException('vetId inválido: user não encontrado');
      if (vet.role && vet.role !== 'VET') throw new BadRequestException('O user indicado por vetId não é um veterinário');
    }

    const data: any = {
      petId: dto.petId,
      vetId: dto.vetId ?? null,
      date: dto.date ? new Date(dto.date) : undefined,
      description: dto.description ?? '',
    };

    try {
      return await this.prisma.medicalRecord.create({
        data,
        include: {
          pet: true,
          vet: { select: { id: true, name: true, email: true, role: true } },
        },
      });
    } catch (err) {
      throw new BadRequestException('Erro ao criar MedicalRecord');
    }
  }

  // retorna todos
  async findAll() {
    return this.prisma.medicalRecord.findMany({
      include: { pet: true, vet: { select: { id: true, name: true, email: true, role: true } } },
      orderBy: { date: 'desc' },
    });
  }

  // retorna um por id
  async findOne(id: number) {
    const rec = await this.prisma.medicalRecord.findUnique({
      where: { id },
      include: { pet: true, vet: { select: { id: true, name: true, email: true, role: true } } },
    });
    if (!rec) throw new NotFoundException(`MedicalRecord com id ${id} não encontrado`);
    return rec;
  }

  // update com validação vetId opcional
  async update(id: number, dto: UpdateMedicalRecordDto) {
    const exists = await this.prisma.medicalRecord.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`MedicalRecord com id ${id} não encontrado`);

    if (dto.vetId) {
      const vet = await this.prisma.user.findUnique({ where: { id: dto.vetId } });
      if (!vet) throw new BadRequestException('vetId inválido: user não encontrado');
      if (vet.role && vet.role !== 'VET') throw new BadRequestException('O user indicado por vetId não é um veterinário');
    }

    const data: any = { ...dto };
    if (dto.date) data.date = new Date(dto.date as any);

    try {
      return await this.prisma.medicalRecord.update({
        where: { id },
        data,
        include: { pet: true, vet: { select: { id: true, name: true, email: true, role: true } } },
      });
    } catch (err) {
      throw new BadRequestException('Erro ao actualizar MedicalRecord');
    }
  }

  // remove
  async remove(id: number) {
    const exists = await this.prisma.medicalRecord.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`MedicalRecord com id ${id} não encontrado`);
    try {
      const del = await this.prisma.medicalRecord.delete({ where: { id } });
      return { message: 'MedicalRecord removido com sucesso', item: del };
    } catch (err) {
      throw new BadRequestException('Erro ao remover MedicalRecord');
    }
  }

  // histórico completo por pet
  async findByPet(petId: number) {
    return this.prisma.medicalRecord.findMany({
      where: { petId },
      include: { pet: true, vet: { select: { id: true, name: true } } },
      orderBy: { date: 'desc' },
    });
  }

  // histórico resumido: junta description e trunca
  async findSummaryByPet(petId: number) {
    const records = await this.prisma.medicalRecord.findMany({
      where: { petId },
      orderBy: { date: 'desc' },
      select: { id: true, date: true, description: true, vet: { select: { id: true, name: true, email: true, role: true } } },
    });

    return records.map(rec => {
      const parts: string[] = [];
      if (rec.description) parts.push(rec.description);
      let resumo = parts.join(' — ');
      if (resumo.length > 300) resumo = resumo.slice(0, 297) + '...';
      return {
        id: rec.id,
        date: rec.date,
        resumoVeterinario: resumo || null,
        vet: rec.vet ? { id: rec.vet.id, name: rec.vet.name, email: rec.vet.email, role: rec.vet.role } : null,
      };
    });
  }
}
