import { Injectable, Logger, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(AuthService.name);
  }
  async login(login: LoginDto) {
    const auth = {
      email: 'joao@gmail.com',
      password: '123',
    };

    if (auth && auth.password === login.password) {
      this.logger.log('Login successfully');
      const payload = {
        name: auth.email,
        sub: auth.email,
      };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }
    this.logger.error('email or password are invalid');
    return null;
  }
}
