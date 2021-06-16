import { PartialType } from '@nestjs/mapped-types';
import { Message } from './message.dto';

export class ModifyMessage extends PartialType(Message) {}