import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema({
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
export class Cat {
  @Prop({ required: true, index: true })
  name: string;
}

export const CatEntity = SchemaFactory.createForClass(Cat);
