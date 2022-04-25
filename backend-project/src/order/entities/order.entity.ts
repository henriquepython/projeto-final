import { AutoMap } from '@automapper/classes';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';
import { OrderStatus } from './OrderStatus.enum';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'orders' })
export class Order {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @AutoMap()
  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  UpdatedDate: Date;

  @DeleteDateColumn()
  CancelledDate: Date;

  @AutoMap()
  @Column('simple-enum')
  Status: OrderStatus = OrderStatus.Pending;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @BeforeInsert() beforeInsertActions() {
    this.generateId();
    this.calculateTotal();
  }

  generateId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }

  calculateTotal() {
    return (this.total = this.items.reduce((sum, item) => {
      return sum + item.quantity * item.price;
    }, 0));
  }
}
