import Product from 'src/product/entities/product.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { v4 as uuidv4 } from 'uuid';

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

  @BeforeInsert() generateId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }
}
