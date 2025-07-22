import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('ProductsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/product (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/product')
      .send( {
    
    "name": "ggj",
    "price": 200,
    "stock": 200,
    "businessId": "cmcxcux150001kft1mo2kejhk"
    
  
  })
      .expect(201);

    expect(response.body.name).toBe('Produto Teste');
  });

  it('/product (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/product')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
  it('/products/:id (GET)', async () => {
    const productResponse = await request(app.getHttpServer())
      .post('/products')
      .send( {
    
    "name": "gg",
    "price": 20,
    "stock": 20,
   
    
  
  })
      .expect(201);

    const response = await request(app.getHttpServer())
      .get(`/products/${productResponse.body.id}`)
      .expect(200);

    expect(response.body.name).toBe('Produto Teste');
  });

  afterAll(async () => {
    await app.close();
  });
});