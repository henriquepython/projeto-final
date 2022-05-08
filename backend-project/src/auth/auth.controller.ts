import {
  BadRequestException,
  Logger,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Controller, Post, Body, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@UsePipes(new ValidationPipe())
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
    const user = await this.userService.findUserByEmail(loginDto.email);

    if (!user || user.password != loginDto.password) {
      this.logger.error('unauthorized user');
      throw new BadRequestException('Invalid');
    }

    this.logger.log('Login realizado com sucesso');
    return user.email;
  }

  @Post('/admin')
  async loginAdmin(@Body() loginDto: LoginDto) {
    const admin = {
      email: 'joao@gmail.com',
      password: '123456',
      roles: 'admin',
    };

    if (
      admin.email != loginDto.email ||
      admin.password != loginDto.password ||
      admin.roles != 'admin'
    ) {
      this.logger.error('unauthorized user');
      throw new BadRequestException('unauthorized user');
    }

    this.logger.log('Login successfully');
    const payload = {
      name: admin.email,
      sub: admin.email,
    };
    return { accessToken: await this.jwtService.signAsync(payload) };
  }
}
