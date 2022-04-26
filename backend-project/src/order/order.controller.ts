import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDTO } from './dto/order.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() order: CreateOrderDTO, userId: string) {
    return this.orderService.createOrder(order, userId);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':user')
  findOne(@Param('user') user: string) {
    return this.orderService.listOrdersByUser(user);
  }
}
