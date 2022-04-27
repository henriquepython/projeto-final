import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @HttpCode(201)
  @Post()
  addCart(@Body() createCartDto: CreateCartDto) {
    return this.cartService.addCart(createCartDto);
  }

  @HttpCode(204)
  @Delete('/user/:id')
  removeCart(@Param('id') id: string) {
    return this.cartService.removeCart(id);
  }

  @HttpCode(204)
  @Delete(':id')
  removeAllByUser(@Param('id') id: string) {
    return this.cartService.removeAllCart(id);
  }

  @Get('/user/:id')
  findByUser(@Param('id') id: string) {
    return this.cartService.findCartByUser(id);
  }
}
