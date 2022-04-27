import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

import { OrderStatus } from '../entities/OrderStatus.enum';

export class CreateOrderDto {
  @AutoMap()
  @ApiProperty()
  totalPrice: number;

  @AutoMap()
  @ApiProperty()
  products: {
    products: {
      type: MongooseSchema.Types.ObjectId;
      ref: 'Product';
    };
    quantity: {
      type: number;
      default: 1;
    };
  }[];

  @AutoMap()
  @ApiProperty()
  quantity: number;

  @AutoMap()
  @ApiProperty()
  status: OrderStatus;

  @AutoMap()
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId;
}
