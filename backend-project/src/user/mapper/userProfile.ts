import {
  CamelCaseNamingConvention,
  createMap,
  Mapper,
  namingConventions,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        User,
        CreateUserDto,
        namingConventions(new CamelCaseNamingConvention()),
      );

      createMap(
        mapper,
        CreateUserDto,
        User,
        namingConventions(new CamelCaseNamingConvention()),
      );
    };
  }
}
