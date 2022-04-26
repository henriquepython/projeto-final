import { Module, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'projetofinaljoao',
      signOptions: { expiresIn: '2700s' },
    }),
    MongooseModule,
    UserModule,
  ],
  controllers: [AuthController],
  exports: [MongooseModule, JwtStrategy, Logger],
  providers: [AuthService, JwtStrategy, Logger],
})
export class AuthModule {}
