import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateProductDto {
  @AutoMap()
  @ApiProperty()
  title: string;
  @AutoMap()
  @ApiProperty()
  image: string;
  @AutoMap()
  @ApiProperty()
  description: string;
  @AutoMap()
  @ApiProperty()
  price: number;

  @AutoMap()
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId | '';

  @AutoMap()
  @ApiProperty()
  quantity: number;
}
