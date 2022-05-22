import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Dog, DogEntity } from './entities/dog.entity';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
