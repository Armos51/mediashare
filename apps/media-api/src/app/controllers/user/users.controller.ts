import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, UseGuards, HttpCode, Request } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiHideProperty, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';
import { PlaylistService } from '../playlist/services/playlist.service';
import { ShareItemService } from '../../modules/share-item/services/share-item.service';

import { ObjectId } from 'mongodb';

import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { UserService } from '../../modules/auth/user.service';
import { BcRolesType, BC_ROLES } from '@core-lib';
import { UserGetResponse, UserPostResponse } from './decorators/user-response.decorator';
import { ObjectIdPipe } from '@mediashare/shared';
import RouteTokens from '../../modules/app-config.module.ts/constants/open-api.constants';
import { PlaylistResponseDto } from '../playlist/dto/playlist-response.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService, private playlistService: PlaylistService, private shareItemService: ShareItemService) {}

  @UserGetResponse({ isArray: true })
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(RouteTokens.USER_ID)
  @ApiParam({ name: 'userId', type: String, required: true })
  @UserGetResponse()
  findOne(@Param('userId', new ObjectIdPipe()) userId: ObjectId): Promise<User> {
    return this.userService.findOne(userId);
  }

  @Put(RouteTokens.USER_ID)
  @ApiParam({ name: 'userId', type: String, required: true })
  @UserPostResponse()
  update(@Param('userId', new ObjectIdPipe()) userId: ObjectId, @Body() updateUserDto: UpdateUserDto): Promise<Partial<User>> {
    return this.userService.update(userId, updateUserDto);
  }

  @Delete(RouteTokens.USER_ID)
  @ApiParam({ name: 'userId', type: String, required: true })
  @UseGuards(JwtAuthGuard)
  remove(@Param('userId') userId: string): Promise<DeleteResult> {
    return this.userService.remove(userId);
  }

  @Get(':userId/playlists')
  @UserGetResponse({ type: PlaylistResponseDto, isArray: true })
  @ApiParam({ name: 'userId', type: String, required: true })
  @ApiHideProperty()
  getPlaylists(@Param('userId', new ObjectIdPipe()) userId: ObjectId) {
    return this.playlistService.getPlaylistByUserId({ userId });
  }

  @Put(':userId/roles')
  @UserPostResponse({ type: UserDto })
  @ApiBody({ enum: BC_ROLES, isArray: true })
  setRoles(@Param('userId') id: string, @Body() params: { roles: BcRolesType[] }) {
    const { roles = [] } = params;
    return this.userService.setRoles(id, roles);
  }

  /* shared with others */
}
