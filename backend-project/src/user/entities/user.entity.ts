import { AutoMap } from '@automapper/classes';

export class User {
  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  password: string;
}
