import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

@Schema({
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
export class Dog {
  @Prop({ required: true, index: true })
  name: string;
}

export const DogEntity = SchemaFactory.createForClass(Dog);
