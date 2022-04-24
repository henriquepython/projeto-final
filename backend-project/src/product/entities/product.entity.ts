import { IsNotEmpty, IsString } from 'class-validator';
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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image_url: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.products)
  owner: User;
}
