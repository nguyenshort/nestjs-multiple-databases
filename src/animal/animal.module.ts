import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog, DogEntity } from '../dogs/entities/dog.entity';
import { Cat, CatEntity } from '../cats/entities/cat.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Dog.name,
          schema: DogEntity,
        },
      ],
      'secondDB',
    ),
    MongooseModule.forFeature(
      [
        {
          name: Cat.name,
          schema: CatEntity,
        },
      ],
      'firstDB',
    ),
  ],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
