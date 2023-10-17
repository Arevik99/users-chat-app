import { Logger } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway {
    @WebSocketServer()
    server: any;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: Message): void {
        this.server.emit('message', message);
    }

}
