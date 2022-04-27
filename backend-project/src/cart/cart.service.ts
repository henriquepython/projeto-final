import { BadRequestException, Injectable, Logger, Scope } from '@nestjs/common';
import { CartRepository } from './cart.Repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entities/cart.entity';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Injectable({ scope: Scope.REQUEST })
export class CartService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    private readonly repository: CartRepository,
  ) {
    this.logger = new Logger(CartService.name);
  }
  async addCart(createCartDto: CreateCartDto) {
    const cartMapper = this.mapper.map(createCartDto, CreateCartDto, Cart);

    this.logger.log(
      `product with id: ${cartMapper.productId} has been added to cart`,
    );
    return await this.repository.create(cartMapper);
  }

  async removeCart(id: string) {
    this.logger.log(`product with id: ${id} has been removed from cart`);
    await this.repository.remove(id);
    return 'removed one';
  }

  async removeAllCart(userId: any) {
    this.logger.log('empty cart');
    await this.repository.removeMany(userId);
    return 'empty cart';
  }

  async findCartByUser(userId: any) {
    const cart = await this.repository.findCartByUser(userId);

    if (!cart) {
      this.logger.error(`there is no caart with the userId: ${userId}`);
      throw new BadRequestException('product not found');
    }

    this.logger.log('cart found');
    return cart;
  }
}
