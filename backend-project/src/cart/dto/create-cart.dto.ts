import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateCartDto {
  @AutoMap()
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @ApiProperty()
  productId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @ApiProperty()
  quantity: number;

  @AutoMap()
  @ApiProperty()
  price: number;
}
