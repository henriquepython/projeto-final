import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(UserService.name);
  }

  async create(createUserDto: CreateUserDto) {
    this.logger.log('created user');
    return await this.repository.create(createUserDto);
  }
}
