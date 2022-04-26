import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';

@Schema()
export class OrderModel {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: false,
    ref: User.name,
  })
  user: MongooseSchema.Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: false,
    ref: Product.name,
  })
  product: MongooseSchema.Types.ObjectId;

  @Prop({ type: Number })
  total: number;

  @Prop({ type: String })
  products: string;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);
