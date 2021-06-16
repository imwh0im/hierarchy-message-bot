import { Injectable, NotFoundException } from '@nestjs/common';
import { Message, ModifyMessage } from '../../src/dto';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessage(messageId: number): Message {
    const message = this.messages.find(message => message.id === messageId);
    if (!message) {
      throw new NotFoundException(`Not found messageId #${messageId}`);
    }
    return message;
  }

  public createMessage(messageData): Message {
    const messageId = this.messages.length + 1;
    this.messages.push({
      id: messageId,
      ...messageData,
    });
    return this.messages.find(message => message.id === messageId);
  }

  public modifyMessage(messageId: number, messageData: ModifyMessage): boolean {
    const message = this.messages.find(message => message.id === messageId);
    if (!message) {
      throw new NotFoundException(`Not found messageId #${messageId}`);
    }
    this.deleteMessage(messageId);
    this.messages.push({
      ...message,
      ...messageData,
    });

    return true;
  }

  private deleteMessage(messageId: number) {
    this.getMessage(messageId);
    this.messages = this.messages.filter(message => message.id !== messageId);
  }
}
