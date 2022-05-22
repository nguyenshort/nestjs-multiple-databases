import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat, CatEntity } from './entities/cat.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
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
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
