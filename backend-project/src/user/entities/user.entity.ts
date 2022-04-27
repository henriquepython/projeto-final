import { AutoMap } from '@automapper/classes';
import { Roles } from '../dto/roles.enum';

export class User {
  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  roles: Roles;

  @AutoMap()
  password: string;

  created: Date;
}
