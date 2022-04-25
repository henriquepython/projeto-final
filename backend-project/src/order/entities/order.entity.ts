import { AutoMap } from '@automapper/classes';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { OrderStatus } from './OrderStatus.enum';

class ProductOrder {
  @AutoMap()
  product: Product;
  @AutoMap()
  quantity: number;
}

export class Order extends Document {
  @AutoMap()
  owner: User;
  @AutoMap()
  totalPrice: number;
  @AutoMap()
  products: ProductOrder[];
  @AutoMap()
  status: OrderStatus = OrderStatus.Pending;
  created: Date;
}
