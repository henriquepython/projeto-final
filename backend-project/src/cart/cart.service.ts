import { Injectable, Logger, Scope } from '@nestjs/common';
import { CartRepository } from './cart.Repository';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable({ scope: Scope.REQUEST })
export class CartService {
  constructor(
    private readonly logger: Logger,
    private readonly repository: CartRepository,
  ) {
    this.logger = new Logger(CartService.name);
  }
  async addCart(createCartDto: CreateCartDto) {
    return await this.repository.create(createCartDto);
  }

  async removeCart(id: string) {
    await this.repository.remove(id);
    return 'removed one';
  }

  async removeAllCart(userId: string) {
    await this.repository.removeMany(userId);
    return 'removed all';
  }

  async findCartByUser(userId: any) {
    return await this.repository.findCartByUser(userId);
  }
}
