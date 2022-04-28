import { AutoMap } from '@automapper/classes';
import { Schema as MongooseSchema } from 'mongoose';
import { CartOrderDto } from 'src/cart/dto/cart-order.dto';
import { OrderStatus } from '../../shared/enum/OrderStatus.enum';

export class Order {
  @AutoMap()
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  status: OrderStatus;

  @AutoMap()
  products: CartOrderDto[];

  @AutoMap()
  totalPrice: number;

  updatedAt: Date;

  createdAt: Date;
}
