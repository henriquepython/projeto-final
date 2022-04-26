import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @AutoMap()
  @Prop()
  title: string;

  @AutoMap()
  @Prop()
  image: string;

  @AutoMap()
  @Prop()
  description: string;

  @AutoMap()
  @Prop()
  quantity: number;

  @AutoMap()
  @Prop()
  price: number;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
