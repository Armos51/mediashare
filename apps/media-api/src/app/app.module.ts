import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './controllers/user/user.module';
import { LoggerModule } from 'nestjs-pino';

/* TODO: custom variable for loading this from */
const envFilePath = '.env.development';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: envFilePath, isGlobal: true }),
    // CoreModule.forRoot({ mongoPath }),

    TypeOrmModule.forRoot({
      synchronize: !process.env.production,
      autoLoadEntities: true,
      type: (process.env.DATABASE_TYPE as any) || 'mongodb',
      url: process.env.DB_URL,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: process.env.DATABASE_SSL,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    UserModule,
    LoggerModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
