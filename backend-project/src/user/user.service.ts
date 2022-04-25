import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    @InjectMapper() private mapper: Mapper,
    private readonly repository: UserRepository,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(UserService.name);
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    this.logger.log('created user');
    const userMapper = this.mapper.map(createUserDto, CreateUserDto, User);
    return await this.repository.create(userMapper);
  }
}
