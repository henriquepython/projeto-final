import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  Scope,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { Mapper } from '@automapper/core';
import { User } from './entities/user.entity';
import { InjectMapper } from '@automapper/nestjs';

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
    const userMapper = this.mapper.map(createUserDto, CreateUserDto, User);
    const user = await this.repository.findByEmail(userMapper.email);

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    this.logger.log('created user');
    userMapper.role = 'USER';
    return await this.repository.create(userMapper);
  }

  async createAdmin(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const userMapper = this.mapper.map(createUserDto, CreateUserDto, User);
    const user = await this.repository.findByEmail(createUserDto.email);

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    this.logger.log('created user');
    userMapper.role = 'ADMIN';
    return await this.repository.create(userMapper);
  }

  async findByEmail(userEmail: string) {
    this.logger.log(`looking for user with email: ${userEmail}`);
    const user = await this.repository.findByEmail(userEmail);

    if (!user) {
      this.logger.error(`there is no user with the email: ${userEmail}`);
      throw new BadRequestException('user not found');
    }

    this.logger.log('user found');
    return user;
  }
}
