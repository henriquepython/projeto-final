import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @AutoMap()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  user: MongooseSchema.Types.ObjectId;

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
