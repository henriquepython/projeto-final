import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
//Para habilitar monitoramento descomentar
// import * as apllicationInsights from 'applicationinsights';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Para habilitar monitoramento descomentar e adicionar YOUR_KEY_INSTRUMENTTION azure
  // apllicationInsights
  //   .setup('YOUR_KEY_INSTRUMENTTION')
  //   .setAutoCollectConsole(true)
  //   .setInternalLogging(true, true)
  //   .setSendLiveMetrics(true)
  //   .setAutoCollectRequests(true)
  //   .start();

  //swagger config
  const documentBuilder = new DocumentBuilder()
    .setTitle('Mini-Loja')
    .setDescription('Mini loja API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({ origin: '*' });
  await app.listen(4200);
}
bootstrap();
