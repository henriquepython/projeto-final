import { AutoMap } from '@automapper/classes';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'product',
})
export default class Product {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column()
  price: number;

  @AutoMap()
  @Column()
  stock: number;

  @AutoMap()
  @Column()
  image_url: string;

  @AutoMap()
  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.products)
  owner: User;
}
