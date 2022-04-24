import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable({ scope: Scope.REQUEST })
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.repository.save(createUserDto);
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.repository.find();
  }

  async findById(id: string) {
    return await this.repository.find({ where: { id: id } });
  }

  async findByEmail(email: string): Promise<User[]> {
    return await this.repository.find({ where: { email: email } });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    await this.repository.update(id, updateUserDto);
    return updateUserDto;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
