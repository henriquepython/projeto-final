import {
  CamelCaseNamingConvention,
  createMap,
  Mapper,
  namingConventions,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateCartDto } from '../dto/create-cart.dto';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Cart,
        CreateCartDto,
        namingConventions(new CamelCaseNamingConvention()),
      );

      createMap(
        mapper,
        CreateCartDto,
        Cart,
        namingConventions(new CamelCaseNamingConvention()),
      );
    };
  }
}
