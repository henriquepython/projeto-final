import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @HttpCode(201)
  @Post()
  createOrder(@Body() order: CreateOrderDto) {
    return this.orderService.createOrder(order);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get('/user/:user')
  findByUser(@Param('user') user: string) {
    return this.orderService.listOrdersByUser(user);
  }

  @Patch('/cancelled/:id')
  cancelledOrder(@Param('id') id: string) {
    return this.orderService.cancelledOrderByUser(id);
  }

  @Patch('/completed/:id')
  completedOrder(@Param('id') id: string) {
    return this.orderService.completedOrderByUser(id);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
