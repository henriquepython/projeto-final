import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';
import { OrderItem } from '../entities/order-item.entity';
import { OrderStatus } from '../entities/OrderStatus.enum';

export class CreateOrderDto {
  @AutoMap()
  @ApiProperty()
  user: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @ApiProperty()
  products: OrderItem[];

  @AutoMap()
  @ApiProperty()
  total: number;

  @AutoMap()
  @ApiProperty()
  quantity: number;

  @AutoMap()
  @ApiProperty()
  status: OrderStatus;
}
