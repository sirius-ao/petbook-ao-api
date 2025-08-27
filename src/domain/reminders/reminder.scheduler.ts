/* src/reminders/reminder.scheduler.ts */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ReminderService } from './reminder.service';
import { NotificationService } from '../notifications/notification.service';


@Injectable()
export class ReminderScheduler {
private logger = new Logger(ReminderScheduler.name);
constructor(private reminderService: ReminderService, private notifier: NotificationService) {}


@Cron('*/1 * * * *')
async handleCron() {
this.logger.debug('Checking for due reminders...');
const due = await this.reminderService.getDueReminders(1);
for (const r of due) {
const subject = r.title;
const message = r.message ?? `Lembrete: ${r.title}`;
try {
await this.notifier.notifyByChannels(r.channels, r.userId, subject, message);
await this.reminderService.reschedule(r);
// if no repeat, mark as sent
if (!r.repeat || r.repeat === 'none') await this.reminderService.markSent(r.id);
this.logger.log(`Dispatched reminder ${r.id} -> ${subject}`);
} catch (err) {
this.logger.error('Failed to dispatch reminder', err);
}
}
}
}