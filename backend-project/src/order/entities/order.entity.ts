import { AutoMap } from '@automapper/classes';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateCartDto } from 'src/cart/dto/create-cart.dto';
import { OrderStatus } from '../../shared/enum/OrderStatus.enum';

export class Order {
  @AutoMap()
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  status: OrderStatus;

  @AutoMap()
  products: CreateCartDto[];

  @AutoMap()
  totalPrice: number;

  updatedAt: Date;

  createdAt: Date;
}
