import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return 'cria order';
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
