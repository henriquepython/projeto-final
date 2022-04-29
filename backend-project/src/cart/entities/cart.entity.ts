import { Schema as MongooseSchema } from 'mongoose';
import { AutoMap } from '@automapper/classes';

export class Cart {
  @AutoMap()
  userId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  productId: MongooseSchema.Types.ObjectId;

  @AutoMap()
  quantity: number;

  price: number;

  title: string;

  image: string;
}
