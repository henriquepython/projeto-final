import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable({ scope: Scope.REQUEST })
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async create(user: User): Promise<User> {
    return await this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne({ where: { id: id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email: email } });
  }

  async update(id: string, user: User): Promise<User> {
    await this.repository.update(id, user);
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
