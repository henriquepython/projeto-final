import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { CartOrderDto } from 'src/cart/dto/cart-order.dto';
import { User } from 'src/user/entities/user.entity';
import { OrderStatus } from '../enum/OrderStatus.enum';

export type OrderDocument = OrderModel & Document;

@Schema()
export class OrderModel {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ default: OrderStatus.Pending })
  status: OrderStatus;

  @Prop()
  products: CartOrderDto[];

  @Prop()
  totalPrice: number;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);
