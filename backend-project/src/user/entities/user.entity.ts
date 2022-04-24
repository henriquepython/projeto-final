import Product from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({
  name: 'member',
})
export class User {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @OneToMany((type) => Product, (product) => product.owner)
  products: Product[];
}
