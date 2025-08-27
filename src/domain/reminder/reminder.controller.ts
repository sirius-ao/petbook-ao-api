import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async setReminder(
    @Body() body: { appointmentId: number; minutesBefore: number },
  ) {
    const { appointmentId, minutesBefore } = body;

    // pega o agendamento
    const appt = await this.prisma.appointment.findUnique({
      where: { id: appointmentId },
    });

    if (!appt) {
      throw new Error('Agendamento não encontrado');
    }

    // calcula o horário do lembrete com base na data do agendamento
    const remindAt = new Date(
      appt.date.getTime() - minutesBefore * 60 * 1000,
    );

    return {
      appointmentId,
      scheduledAt: appt.date,
      remindAt,
      message: `🔔 Lembrete agendado para ${minutesBefore} minutos antes`,
    };
  }
}
