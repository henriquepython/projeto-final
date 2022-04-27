import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CartOrderDto {
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
