import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { CartOrderDto } from 'src/cart/dto/cart-order.dto';
import { User } from 'src/user/entities/user.entity';
import { OrderStatus } from './OrderStatus.enum';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop({ default: OrderStatus.Pending })
  status: OrderStatus;

  @AutoMap()
  @Prop()
  products: CartOrderDto[];

  @AutoMap()
  @Prop()
  totalPrice: number;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
