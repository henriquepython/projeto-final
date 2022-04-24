import { Controller, Post, Body, Scope } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
@ApiTags('Auth')
@Controller({ path: 'auth', scope: Scope.REQUEST })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }
}
