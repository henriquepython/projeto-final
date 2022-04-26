import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { OrderItem } from './order-item.entity';
import { OrderStatus } from './OrderStatus.enum';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @AutoMap()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: false,
    ref: User.name,
  })
  user: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop()
  products: OrderItem[];

  @AutoMap()
  @Prop({ default: OrderStatus.Pending })
  status: OrderStatus;

  @AutoMap()
  @Prop({ type: Number })
  total: number;

  @AutoMap()
  @Prop({ type: Number, default: 1 })
  quantity: number;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
