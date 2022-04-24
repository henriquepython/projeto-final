import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Auth } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    JwtModule.register({
      secret: 'projetofinaljoao',
      signOptions: { expiresIn: '2700s' },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, Logger],
  exports: [JwtStrategy, Logger],
})
export class AuthModule {}
