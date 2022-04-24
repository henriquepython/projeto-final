import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(Auth)
    private repository: Repository<Auth>,
  ) {}
  async findByEmail(LoginDto) {
    return await this.repository.find({ where: { email: LoginDto.email } });
  }
}
