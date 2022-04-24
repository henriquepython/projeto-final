import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import ProductDetail from './product-detail.entity';

@Entity({
  name: 'product',
})
export default class Product {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @OneToMany((type) => ProductDetail, (productDetail) => productDetail.product)
  details: ProductDetail[];

  @ManyToOne((type) => User, (user) => user.products)
  owner: User;
}
