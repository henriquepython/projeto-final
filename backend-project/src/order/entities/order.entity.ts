import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { OrderStatus } from './OrderStatus.enum';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Product.name })
  productId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  @Prop({ default: OrderStatus.Pending })
  status: OrderStatus;

  @AutoMap()
  @Prop()
  products: {
    products: {
      type: MongooseSchema.Types.ObjectId;
      ref: 'Product';
    };
    quantity: {
      type: number;
      default: 1;
    };
  }[];

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
