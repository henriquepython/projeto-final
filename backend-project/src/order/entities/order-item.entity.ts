import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export type OrderItemDocument = OrderItem & Document;

@Schema()
export class OrderItem {
  @AutoMap()
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop()
  quantity: number;

  @AutoMap()
  @Prop()
  price: number;

  @AutoMap()
  @Prop()
  total: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
