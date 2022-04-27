import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { UserRepository } from './user.repository';
import { UserProfile } from './mapper/userProfile';
import { UserSchema } from 'src/shared/schemas/user.schema';
import { User } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, Logger, UserProfile],
  exports: [UserService, Logger],
})
export class UserModule {}
