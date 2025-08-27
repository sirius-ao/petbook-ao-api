

/* src/reminders/reminder.controller.ts */
import { Controller, Post, Body, Req, Get } from '@nestjs/common';
import { ReminderService } from './reminder.service';


@Controller('reminders')
export class ReminderController {
constructor(private reminderService: ReminderService) {}


// User posts natural text, AI parses and a reminder (or prescription) is created
@Post('from-text')
async createFromText(@Body() body: { userId: number; text: string }) {
return this.reminderService.createFromText(body.userId, body.text);
}


@Get('due')
async listDue() {
return this.reminderService.getDueReminders(60);
}
}