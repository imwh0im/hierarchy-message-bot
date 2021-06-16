import { IsNumber, IsString } from 'class-validator';

export class Message {
    @IsNumber()
    public id!: number;

    @IsNumber()
    public parentId?: number;

    @IsNumber()
    public order!: number;

    @IsString()
    public name!: string;

    @IsString()
    public message!: string;
}
