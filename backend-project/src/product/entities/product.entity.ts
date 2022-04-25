import { AutoMap } from '@automapper/classes';
import { User } from 'src/user/entities/user.entity';

export class Product {
  @AutoMap()
  owner: User;
  @AutoMap()
  title: string;
  @AutoMap()
  image: string;
  @AutoMap()
  description: string;
  @AutoMap()
  price: number;
  created: Date;
}
