import { Product } from 'src/product/entities/product.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { AutoMap } from '@automapper/classes';

@Schema()
export class Cart {
  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Product.name })
  productId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop()
  quantity: number;

  @Prop()
  price: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
