import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [];

  public getMessages() {
    return this.messages;
  }

  public async getMessage(messageId: number) {
    const message = this.messages.find(message => message.id === messageId);
    if (!message) {
      throw new NotFoundException(`Not found messageId #${messageId}`);
    }
    return message;
  }

  public async createMessage(messageData) {
    const messageId = this.messages.length + 1;
    this.messages.push({
      id: messageId,
      ...messageData,
    });
    return this.messages.find(message => message.id === messageId);
  }

  public async modifyMessage(messageId: number, messageData) {
    const message = this.messages.find(message => message.id === messageId);
    if (!message) {
      throw new NotFoundException(`Not found messageId #${messageId}`);
    }
    this.deleteMessage(messageId);
    this.messages.push({
      id: messageId,
      ...messageData,
    });

    return true;
  }

  private deleteMessage(messageId: number) {
    this.getMessage(messageId);
    this.messages = this.messages.filter(message => message.id !== messageId);
  }
}
