import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { AutomapperModule } from '@automapper/nestjs';
import { CamelCaseNamingConvention } from '@automapper/core';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/order'),
    ,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
      namingConventions: new CamelCaseNamingConvention(),
    }),
    ProductModule,
    UserModule,
    AuthModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
