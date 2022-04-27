import { Product } from 'src/product/entities/product.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type CartDocument = CartModel & Document;

@Schema()
export class CartModel {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Product.name })
  productId: MongooseSchema.Types.ObjectId;

  @Prop()
  quantity: number;

  @Prop()
  price: number;
}

export const CartSchema = SchemaFactory.createForClass(CartModel);
