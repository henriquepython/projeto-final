import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { OrderItem } from './order-item.entity';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: false,
    ref: User.name,
  })
  user: MongooseSchema.Types.ObjectId;

  @Prop()
  products: OrderItem[];

  @Prop()
  status: OrderStatus;

  @Prop({ type: Number })
  total: number;

  @Prop({ type: Number, default: 1 })
  quantity: number;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
