import { Logger } from '@nestjs/common';
import { Controller, Post, Body, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller({ path: 'auth', scope: Scope.REQUEST })
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
    private readonly userService: UserService,
  ) {
    this.logger = new Logger(AuthController.name);
  }

  @Post()
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Buscando usuario por email: ${loginDto.email}`);
    const user = await this.userService.findByEmail(loginDto.email);
    if (user && user.password === loginDto.password) {
      this.logger.log('Login realizado com sucesso');
      const payload = {
        name: user.email,
        sub: user.email,
      };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }

    this.logger.log('email ou password invalido');
    return null;
  }
}
