import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'jwt',
})
export class Auth {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
