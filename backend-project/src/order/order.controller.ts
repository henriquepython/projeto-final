import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiBearerAuth()
@ApiTags('order')
@Controller('order')
@UseGuards(RolesGuard)
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

  @Patch('/requestCancelled/:id')
  RequestCancelledOrder(@Param('id') id: string) {
    return this.orderService.RequestCancelledOrderByUser(id);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
