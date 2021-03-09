import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaItem } from '../../controllers/media-item/entities/media-item.entity';
import { MediaItemService } from '../../controllers/media-item/media-item.service';
import { Playlist } from '../../controllers/playlist/entities/playlist.entity';
import { User } from '../../controllers/user/entities/user.entity';
import { AppConfigModule } from '../app-config.module.ts/app-config.module';
import { AppConfigService } from '../app-config.module.ts/app-config.provider';
import { PlaylistItem } from '../playlist-item/entities/playlist-item.entity';
import { ShareItemModule } from '../share-item/share-item.module';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { UserService } from './user.service';

@Module({
  imports: [
    AppConfigModule,
    ClientsModule.registerAsync([
      {
        imports: [AppConfigModule],
        name: 'AUTH_CLIENT',

        useFactory: (configService: AppConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('authHost'),
            port: configService.get('authPort'),
          },
        }),
        inject: [AppConfigService],
      },
    ]),
    TypeOrmModule.forFeature([User, Playlist, PlaylistItem, MediaItem]),
    ShareItemModule,
  ],
  controllers: [],
  providers: [LocalStrategy, SessionSerializer, JwtStrategy, MediaItemService, UserService, UserService],
  exports: [
    ClientsModule,
    SessionSerializer,

    LocalStrategy,
    SessionSerializer,
    JwtStrategy,
    MediaItemService,
    UserService,
    UserService,
  ],
})
export class AuthModule {}
