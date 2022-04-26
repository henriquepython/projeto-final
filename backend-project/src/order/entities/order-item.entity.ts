import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export type OrderItemDocument = OrderItem & Document;

@Schema()
export class OrderItem {
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }] })
  products: MongooseSchema.Types.ObjectId;

  @Prop()
  quantity: number;

  @Prop()
  price: number;

  @Prop()
  total: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
