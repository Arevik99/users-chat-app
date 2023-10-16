import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatGateway } from './chat.gateway';
import { MessagesService } from './message-service/messaging-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ChatGateway, MessagesService],
})
export class AppModule { }
