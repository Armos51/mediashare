/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import * as MongoStore from 'connect-mongo';
import { AppModule } from './app/app.module';

import { writeFileSync } from 'fs';

import * as session from 'express-session';

import {} from 'typeorm/';
import * as passport from 'passport';

const isDev = process.env.NODE_ENV !== 'production';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));

  app.useGlobalPipes(new ValidationPipe());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  /* TODO: abstract this out */
  const config = new DocumentBuilder()
    .setTitle('Media Share API')
    .setDescription('Media Share API')
    .setVersion('1.0')
    .build();

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(
    session({
      store: MongoStore.default.create({
        mongoUrl: typeof process.env.DB_URL === 'string' ? process.env.DB_URL : 'mongodb://localhost:27017/',
        dbName: 'api-session',
        collectionName: 'session',
      }),
      secret: 'this-is-my-secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );
  const document = SwaggerModule.createDocument(app, config);

  const port = process.env.PORT || 3333;
  SwaggerModule.setup('api', app, document);

  if (isDev) writeFileSync('./swagger-spec.json', JSON.stringify(document));

  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
