import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { connectToWhatsApp } from './config/whatsapp/baileys.connection'; // 👈 import

// documentação base do swagger api
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
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .addGlobalResponse({ status: 500, description: ' Internal Server Error' })
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
    .addTag('service', 'Serviços oferecidos pela empresa')
    .addTag('sale-item', 'Item de Venda: cada produto vendido em uma venda.')
    .addTag('auth', 'Gestao de autenticacoes de usuarios')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(urlApiDoc, app, documentFactory);
}

// habilitando cors para o front
function GestaoCors(app) {
  app.enableCors({
    origin: [process.env.CORS_URL],
  });
}

function UsePipe(app){
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Automatically remove non-whitelisted properties
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
    transform: true,            // Enable automatic transformation of input data
    transformOptions: {
      enableImplicitConversion: true, // // Allow implicit type conversion
    }
  }));
}

async function main() {
  await connectToWhatsApp(); // 👈 conecta ao WhatsApp antes do Nest

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
 // UsePipe(app);
  GestaoCors(app);
  apiDoc(app);
  await app.listen(process.env.PORT ?? 3000);
  console.log('✅ API e WhatsApp iniciados com sucesso!');
}

main();
