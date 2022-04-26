import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

import { OrderStatus } from '../entities/OrderStatus.enum';

export class CreateOrderDto {
  @AutoMap()
  @ApiProperty()
  products: string;

  @AutoMap()
  @ApiProperty()
  total: number;

  @AutoMap()
  @ApiProperty()
  quantity: number;

  @AutoMap()
  @ApiProperty()
  status: OrderStatus;

  userId: MongooseSchema.Types.ObjectId;

  productId: MongooseSchema.Types.ObjectId;
}
