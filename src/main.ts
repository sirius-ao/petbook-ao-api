import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //habilitando cors para o front - no futuro mudar para api gateway
  app.enableCors({
    origin:[process.env.CORS_URL]
  });

// documentacao base do swagguer api
    const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The  API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
main();
