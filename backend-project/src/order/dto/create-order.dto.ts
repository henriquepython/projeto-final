import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';
import { CartOrderDto } from 'src/cart/dto/cart-order.dto';

import { OrderStatus } from '../entities/OrderStatus.enum';

export class CreateOrderDto {
  @AutoMap()
  @ApiProperty()
  totalPrice: number;

  @AutoMap()
  @ApiProperty()
  products: CartOrderDto[];

  @AutoMap()
  @ApiProperty()
  status: OrderStatus;

  @AutoMap()
  @ApiProperty()
  userId: MongooseSchema.Types.ObjectId;
}
