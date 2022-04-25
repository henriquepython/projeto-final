import { Injectable, Logger, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/user.repository';
import { LoginDto } from './dto/login.dto';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
    private readonly repositoryUser: UserRepository,
  ) {
    this.logger = new Logger(AuthService.name);
  }
  async login(loginDto: LoginDto): Promise<any> {
    // const auth = {
    //   email: 'joao@gmail.com',
    //   password: '123',
    // };

    const user = await this.repositoryUser.findByEmail(loginDto.email);

    if (user && user.password === loginDto.password) {
      this.logger.log('Login successfully');
      const payload = {
        name: user.email,
        sub: user.email,
      };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }
    this.logger.error('email or password are invalid');
    return null;
  }
}
