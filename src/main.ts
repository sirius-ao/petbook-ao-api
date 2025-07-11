import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function apiDoc(app) {
  const urlApiDoc = 'api';
  const titleApi = 'PetBook API - OpenAPI 3.0';
  const descriptionApi =
    'Esta descrição refere-se ha um sistema híbrido: gestão de clínica/petshop, app para donos, e-commerce  e afiliados' +
    '\n .Teremos áreas separadas: usuários internos (admin, vet, atendente), clientes (donos de pet)' +
    'e sistema (vendas, agendamentos etc.).' +
    'Os endpoints REST que representam esse escopo são:';

  const config = new DocumentBuilder()
    .setTitle(titleApi)
    .setDescription(descriptionApi)
    .setVersion('1.0.0')
    .addBearerAuth( // Add Bearer token authentication
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token' // Name of the security scheme
    )
    .addGlobalResponse({status: 500, description:" Internal Server Error"})
    .addTag('user', 'Gestão de usuários internos do sistema')
    .addTag('business', 'Cadastro e gestão de clínicas/petshops')
    .addTag('client', 'Donos de pets')
    .addTag('pet', 'Gestão dos animais de estimação')
    .addTag('appointment', 'Agendamentos de serviços')
    .addTag('medical-record', 'Prontuário clínico dos pets')
    .addTag('product', 'Gestão dos produtos')
    .addTag('sale', 'Vendas e faturações')
    .addTag('affiliate', 'Gestão de afiliados')
    .addTag('affiliate-referral', 'Indicações e conversões')
    .addTag('service', 'Serviços oferecidos pela empresa (ex: consulta, banho, tosa)')
    .addTag('sale-item', 'Item de Venda: cada produto vendido em uma venda.')
    .addTag('auth','Gestao de autenticacoes de usuarios')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(urlApiDoc, app, documentFactory);
}

function GestaoCors(app) {
  app.enableCors({
    origin: [process.env.CORS_URL],
  });
}

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //habilitando cors para o front - no futuro mudar para api gateway
  GestaoCors(app);

  // documentacao base do swagguer api
  apiDoc(app);

  await app.listen(process.env.PORT ?? 3000);
}
main();
