import { AutoMap } from '@automapper/classes';
import { Role } from 'src/shared/enum/role.enum';

export class User {
  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  roles: Role;

  @AutoMap()
  password: string;

  created: Date;
}
