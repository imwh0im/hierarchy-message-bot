import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  getMessages() {
    return this.messagesService.getMessages();
  }

  @Get('/:id')
  getMessage(@Param('id') messagesId: number) {
    return this.messagesService.getMessage(messagesId);
  }

  @Post()
  createMessage(@Body() messageData) {
    return this.messagesService.createMessage(messageData);
  }

  @Post('/:id')
  modifyMessage(@Param('id') messageId: number, @Body() messageData) {
    return this.messagesService.modifyMessage(messageId, messageData);
  }
}
