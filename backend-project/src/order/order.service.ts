import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { OrderRepository } from './order.repository';

@Injectable({ scope: Scope.REQUEST })
export class OrderService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    private readonly repository: OrderRepository,
  ) {
    this.logger = new Logger(OrderService.name);
  }

  async listOrdersByUser(user: string) {
    return await this.repository.listOrdersByUser(user);
  }

  async findAll() {
    return await this.repository.findAll();
  }
}
