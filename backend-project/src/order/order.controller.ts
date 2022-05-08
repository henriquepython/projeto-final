import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtGuard } from 'src/auth/jwt.auth.guard';

@ApiBearerAuth()
@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @HttpCode(201)
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get()
  findAll(): Promise<CreateOrderDto[]> {
    return this.orderService.findAll();
  }

  @Get('/user/:id')
  findByUser(@Param('id') id: string) {
    return this.orderService.listOrdersByUser(id);
  }

  @UseGuards(JwtGuard)
  @Patch('/cancelled/:id')
  cancelledOrder(@Param('id') id: string): Promise<CreateOrderDto> {
    return this.orderService.cancelledOrderByUser(id);
  }

  @UseGuards(JwtGuard)
  @Patch('/completed/:id')
  completedOrder(@Param('id') id: string): Promise<CreateOrderDto> {
    return this.orderService.completedOrderByUser(id);
  }

  @Patch('/requestCancelled/:id')
  RequestCancelledOrder(@Param('id') id: string): Promise<CreateOrderDto> {
    return this.orderService.RequestCancelledOrderByUser(id);
  }
}
