import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Product from './product.entity';

@Entity({
  name: 'product_detail',
})
export default class ProductDetail {
  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  contents: string;

  @Column()
  ordering: number;

  @ManyToOne((type) => Product, (product) => product.details)
  @JoinColumn({
    name: 'product_id',
  })
  product: Product;
}
