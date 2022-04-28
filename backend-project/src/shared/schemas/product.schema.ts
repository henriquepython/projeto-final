import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from '../enum/category.enum';

export type ProductDocument = ProductModel & Document;

@Schema()
export class ProductModel {
  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  category: Category;

  @Prop()
  quantity: number;

  @Prop()
  price: number;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}
export const ProductSchema = SchemaFactory.createForClass(ProductModel);
