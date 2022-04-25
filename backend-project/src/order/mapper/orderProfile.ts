import {
  CamelCaseNamingConvention,
  createMap,
  Mapper,
  namingConventions,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Order,
        CreateOrderDto,
        namingConventions(new CamelCaseNamingConvention()),
      );

      createMap(
        mapper,
        CreateOrderDto,
        Order,
        namingConventions(new CamelCaseNamingConvention()),
      );
    };
  }
}
