import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    private messages: string[] = [];

    getAllMessages(): string[] {
        return this.messages;
    }

    addMessage(message: string): string {
        // message = this.messages.length + 1;
        this.messages.push(message);
        return message;
    }
}