import { AutoMap } from '@automapper/classes';

export class Product {
  @AutoMap()
  title: string;

  @AutoMap()
  image: string;

  @AutoMap()
  description: string;

  @AutoMap()
  category: string;

  @AutoMap()
  quantity: number;

  @AutoMap()
  price: number;

  created: Date;
}
