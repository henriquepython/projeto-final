import Product from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'order_items' })
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({
    name: 'product_id',
  })
  product: Product;

  order_id: string;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({
    name: 'order_id',
  })
  order: Order;
}
