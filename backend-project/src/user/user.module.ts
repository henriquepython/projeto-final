import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/entities/user.entity';
import { UserRepository } from './user.repository';
import { UserProfile } from './mapper/userProfile';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ProductModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, Logger, UserProfile],
  exports: [UserService, Logger],
})
export class UserModule {}
