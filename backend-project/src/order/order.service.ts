import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
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

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderMapper = this.mapper.map(createOrderDto, CreateOrderDto, Order);

    const { userId, productId } = createOrderDto;
    const getUser: any = await this.userService.getUserById(userId);

    const product = await this.productService.getProductById(productId);
    
    const createdOrder = await this.OrderRepository.createOrder(createOrderDto, product, userId);

    const updateProductDto: UpdateProductDto = {
        id: product._id,
        status: 'SOLD',
        clientId: clientId,
    };
    await this.productService.updateProduct(updateProductDto, session);

    return createdSale;
  }

  async listOrdersByUser(user: string) {
    return await this.repository.listOrdersByUser(user);
  }

  async findAll() {
    return await this.repository.findAll();
  }
}
