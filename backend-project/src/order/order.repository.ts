import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {}

  async create(order: Order): Promise<Order> {
    return await this.repository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findById(id: string) {
    return await this.repository.findOne({ where: { id: id } });
  }

  async findByName(name: string) {
    return await this.repository.findOne({ where: { name: name } });
  }

  async update(id: string, order: Order): Promise<Order> {
    await this.repository.update(id, order);
    return order;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
