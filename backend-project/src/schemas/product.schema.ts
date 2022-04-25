import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserModel } from './user.schema';

@Schema()
export class ProductModel {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: UserModel;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}
export const ProductSchema = SchemaFactory.createForClass(ProductModel);
