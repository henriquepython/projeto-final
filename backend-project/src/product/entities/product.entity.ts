import { AutoMap } from '@automapper/classes';
import { Category } from '../../shared/enum/category.enum';

export class Product {
  @AutoMap()
  title: string;

  @AutoMap()
  image: string;

  @AutoMap()
  description: string;

  @AutoMap()
  category: Category;

  @AutoMap()
  quantity: number;

  @AutoMap()
  price: number;

  created: Date;
}
