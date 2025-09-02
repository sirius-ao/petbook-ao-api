// File: src/lembretes/lembrete.service.ts
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { PrismaService } from '../../database/prisma/prisma.service';

import { NotificationService } from '../notification/notification.service';
import { CreateLembreteDto } from './dto/create-lembrete.dto';
import { UpdateLembreteDto } from './dto/update-lembrete.dto';
import * as cron from 'node-cron';

@Injectable()
export class LembreteService implements OnModuleInit {
  private readonly logger = new Logger(LembreteService.name);
  private cronTasks = new Map<number, cron.ScheduledTask>();

  constructor(
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  async onModuleInit() {
    this.logger.log('LembreteService initializing — scheduling pending lembretes');
    await this.schedulePendingLembretes();
  }

  async schedulePendingLembretes() {
    const now = new Date();
    const lembretes = await this.prisma.lembrete.findMany({
      where: {
        dateTime: { gt: now },
      },
    });

    for (const l of lembretes) {
      try {
        if (l.repeat) this.scheduleRecurring(l);
        else this.scheduleOneTime(l);
      } catch (err) {
        this.logger.error('Falha a agendar lembrete', err);
      }
    }
    this.logger.log(`Agendados ${lembretes.length} lembretes`);
  }

  private scheduleOneTime(lembrete: any) {
    const ms = new Date(lembrete.dateTime).getTime() - Date.now();
    if (ms <= 0) return; // já passou

    const timeout = setTimeout(async () => {
      try {
        await this.handleTrigger(lembrete.id);
      } catch (err) {
        this.logger.error('Erro ao executar lembrete one-time', err);
      }
    }, ms);

    this.schedulerRegistry.addTimeout(`lembrete-${lembrete.id}`, timeout);
    this.logger.log(`One-time reminder scheduled: lembrete-${lembrete.id} em ${lembrete.dateTime}`);
  }

  private scheduleRecurring(lembrete: any) {
    if (lembrete.repeat.startsWith('cron:')) {
      const expression = lembrete.repeat.replace('cron:', '').trim();
      const task = cron.schedule(expression, async () => {
        await this.handleTrigger(lembrete.id);
      });
      this.cronTasks.set(lembrete.id, task);
      this.logger.log(`Recurring cron scheduled for lembrete-${lembrete.id} -> ${expression}`);
      return;
    }

    if (lembrete.repeat === 'daily') {
      // schedule at the same HH:MM of lembrete.dateTime
      const dt = new Date(lembrete.dateTime);
      const hh = dt.getUTCHours();
      const mm = dt.getUTCMinutes();
      const expr = `${mm} ${hh} * * *`; // minute hour every day
      const task = cron.schedule(expr, async () => {
        await this.handleTrigger(lembrete.id);
      });
      this.cronTasks.set(lembrete.id, task);
      this.logger.log(`Daily reminder scheduled for lembrete-${lembrete.id} at ${hh}:${mm} UTC`);
      return;
    }

    // add more repeat strategies as needed
  }

  private async handleTrigger(lembreteId: number) {
    const lembrete = await this.prisma.lembrete.findUnique({
      where: { id: lembreteId },
      include: { cliente: true, pet: true },
    });
    if (!lembrete) return;

    try {
      await this.notificationService.sendReminder(lembrete);
      // opcional: registar envio
      await this.prisma.notification.create({
        data: {
          clientId: lembrete.clienteId || null,
          title: lembrete.title || 'Lembrete',
          body: lembrete.message || '',
          lembreteId: lembrete.id,
        },
      });
    } catch (err) {
      this.logger.error('Falha ao enviar notificação', err);
    }
  }

  // public API
  async create(dto: CreateLembreteDto) {
    const data = {
      title: dto.title,
      message: dto.message,
      dateTime: dto.dateTime ? new Date(dto.dateTime) : null,
      repeat: dto.repeat || null,
      channels: dto.channels || [],
      isPrescription: dto.isPrescription || false,
      prescription: dto.prescription || null,
      petId: dto.petId || null,
      clienteId: dto.clienteId || null,
    };

    const lembrete = await this.prisma.lembrete.create({ data });

    if (lembrete.repeat) this.scheduleRecurring(lembrete);
    else if (lembrete.dateTime) this.scheduleOneTime(lembrete);

    return lembrete;
  }

  async findAll(future = false) {
    if (future) {
      return this.prisma.lembrete.findMany({ where: { dateTime: { gt: new Date() } } });
    }
    return this.prisma.lembrete.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number) {
    return this.prisma.lembrete.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdateLembreteDto) {
    // cancel existing tasks
    this.clearScheduled(id);

    const data: any = { ...dto };
    if (dto.dateTime) data.dateTime = new Date(dto.dateTime as any);

    const lembrete = await this.prisma.lembrete.update({ where: { id }, data });

    if (lembrete.repeat) this.scheduleRecurring(lembrete);
    else if (lembrete.dateTime) this.scheduleOneTime(lembrete);

    return lembrete;
  }

  async remove(id: number) {
    this.clearScheduled(id);
    await this.prisma.lembrete.delete({ where: { id } });
    return { success: true };
  }

  private clearScheduled(id: number) {
    const timeoutKey = `lembrete-${id}`;
    try {
      const timeout = this.schedulerRegistry.getTimeout(timeoutKey);
      if (timeout) this.schedulerRegistry.deleteTimeout(timeoutKey);
    } catch (e) {
      // ignore if not exist
    }

    const cronTask = this.cronTasks.get(id);
    if (cronTask) {
      cronTask.destroy();
      this.cronTasks.delete(id);
    }
  }
}
