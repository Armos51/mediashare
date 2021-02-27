import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';
import { PlaylistService } from '../playlist/services/playlist.service';
import { PlaylistItemService } from '../../modules/playlist-item/services/playlist-item.service';
import { MediaItemService } from '../media-item/media-item.service';
import { ShareItemService } from '../../modules/share-item/services/share-item.service';

import * as R from 'remeda';
import { ObjectId } from 'mongodb';
import { notFoundResponse } from '../../core/functors/http-errors.functor';
@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private playlistService: PlaylistService,
    private playlistItemService: PlaylistItemService,
    private mediaItemService: MediaItemService,
    private shareItemService: ShareItemService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { username } = createUserDto;
    const existingUser = await this.userService.checkIfUserExists(username);
    console.log(existingUser);
    if (existingUser) return existingUser;
    return await this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<Partial<User>> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.remove(id);
  }

  @Get(':id/playlists')
  async getPlaylists(@Param('id') id: string, @Res() res: Response) {
    const playlists = await this.playlistService.findByUserId(id);

    if (!playlists || playlists.length < 1) return res.status(HttpStatus.NOT_FOUND).send([]);

    const mediaIdsTuple = R.pipe(
      playlists,
      R.map((playlist) => playlist.items),
      R.map((playlistItems) => R.map(playlistItems, (item) => item.mediaId))
    );

    const mediaIds = R.reduce(mediaIdsTuple, (prev, curr) => [...prev, ...curr], []);

    const mediaItems = await this.mediaItemService.findPlaylistMedia(mediaIds);

    const indexedMediaItems = R.indexBy(mediaItems, (item) => item._id);

    const mapped = R.map(playlists, (playlist) => ({
      ...playlist,
      mediaItems: playlist?.items.map((item) => indexedMediaItems[item.mediaId.toHexString()]) || [],
    }));

    return res.status(HttpStatus.OK).send(mapped);
  }

  @Get(':id/media-items')
  async getMedia(@Param('id') id: string, @Res() res: Response) {
    const mediaItems = await this.mediaItemService.findMediaItemsByUserId(id);

    if (!mediaItems || mediaItems.length < 1) return res.status(HttpStatus.NOT_FOUND).send([]);

    return res.status(HttpStatus.OK).send(mediaItems);
  }

  @Get(':id/share-items')
  async getShareItems(@Param('id') id: string) {
    const shareItems = this.shareItemService.findByQuery({ userId: new ObjectId(id) });

    return shareItems;
  }

  @Put(':id/share-item/:shareId')
  async readSharedItem(@Param('id') id: string, @Param('shareId') shareId: string) {
    const sharedItem = await this.shareItemService.update(shareId, { read: true });

    const { mediaId = null, playlistId = null } = sharedItem;

    const user = await this.userService.findOne(id);

    if (mediaId) {
      const { sharedMediaItems = [] } = user;
      const updatedUser = await this.userService.update(id, { sharedMediaItems: [...sharedMediaItems, mediaId] });
      return updatedUser;
    }
    if (playlistId) {
      const { sharedPlaylists = [] } = user;
      const updatedUser = await this.userService.update(id, { sharedPlaylists: [...sharedPlaylists, playlistId] });
      return updatedUser;
    }
    throw notFoundResponse('no content Id on shared Item');
  }
}
