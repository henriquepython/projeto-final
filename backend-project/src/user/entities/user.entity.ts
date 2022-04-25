import { AutoMap } from '@automapper/classes';
import Product from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'member',
})
export class User {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column()
  email: string;

  @AutoMap()
  @Column()
  phoneNumber: string;

  @AutoMap()
  @Column()
  password: string;

  @OneToMany((type) => Product, (product) => product.owner)
  products: Product[];
}
