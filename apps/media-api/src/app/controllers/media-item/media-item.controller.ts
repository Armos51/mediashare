import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { MediaItemService } from './media-item.service';
import { CreateMediaItemDto } from './dto/create-media-item.dto';
import { UpdateMediaItemDto } from './dto/update-media-item.dto';

import { notFoundResponse } from '@api-core/functors/http-errors.functor';

import { MEDIA_CATEGORY } from '@core-lib';
import { ObjectId } from 'mongodb';
import { ObjectIdPipe } from '@mediashare/shared';
import { AppConfigService } from '@api-modules/app-config/app-config.provider';
import { CreateDto } from '@api-core/decorators/create-dto.decorator';
import { GetUserId } from '@api-core/decorators/user.decorator';
import RouteTokens from '@api-modules/app-config/constants/open-api.constants';
import { JwtAuthGuard } from '@api-modules/auth/guards/jwt-auth.guard';
import { ShareItemService } from '@api-modules/share-item/share-item.service';
import { ShareItem } from '@api-modules/share-item/entities/share-item.entity';
import { MediaItem } from './entities/media-item.entity';
import { MediaGetResponse, MediaPostResponse, MediaPutResponse } from './media-item.decorator';

@ApiTags('media-items')
@Controller('media-items')
export class MediaItemController {
  constructor(private readonly mediaItemService: MediaItemService, private shareItemService: ShareItemService, private configSvc: AppConfigService) {}

  @Get('popular')
  @MediaGetResponse({ isArray: true })
  findPopularMediaItems() {
    return this.mediaItemService.findPopularMediaItems();
  }

  @Get()
  @ApiQuery({ name: 'text', required: false, allowEmptyValue: true })
  @ApiQuery({ name: 'tags', type: String, explode: true, isArray: true, required: false, allowEmptyValue: true })
  @MediaGetResponse({ isArray: true })
  findAll(@Query('text') query?: string, @Query('tags') tags?: string[]) {
    const parsedTags = Array.isArray(tags) ? tags : typeof tags === 'string' ? [tags] : undefined;

    return query || tags ? this.mediaItemService.searchMediaItems({ query, tags: parsedTags }) : this.mediaItemService.findAll();
  }

  @Get('categories')
  getCategories() {
    return MEDIA_CATEGORY;
  }

  @Get(':mediaId')
  @ApiParam({ name: 'mediaId', type: String, required: true })
  @MediaGetResponse()
  async findOne(@Param('mediaId', new ObjectIdPipe()) mediaId: ObjectId) {
    const response = await this.mediaItemService.findMediaItemWithDetail(mediaId);
    if (!response) throw notFoundResponse('mediaItem', { args: { mediaId } });
    console.log(`[MediaItemController.findOne] response: ${JSON.stringify(response, null, 2)}`);
    return response;
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @MediaPostResponse()
  async create(@CreateDto() createMediaItemDto: CreateMediaItemDto, @GetUserId() createdBy: ObjectId) {
    const mediaItem: Omit<MediaItem, '_id'> = {
      isPlayable: false,
      uri: '',
      ...createMediaItemDto,
      userId: createdBy,
      createdBy,
    };
    return await this.mediaItemService.create({ ...mediaItem });
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put(RouteTokens.MEDIA_ITEM_ID)
  @ApiParam({ name: 'mediaId', type: String, required: true })
  @MediaPutResponse()
  update(@Param('mediaId', ObjectIdPipe) mediaId: ObjectId, @Body() updateMediaItemDto: UpdateMediaItemDto) {
    return this.mediaItemService.update(mediaId, updateMediaItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(RouteTokens.MEDIA_ITEM_ID)
  @ApiParam({ name: 'mediaId', type: String, required: true })
  async remove(@Param('mediaId') mediaId: string) {
    const deleted = await this.mediaItemService.remove(mediaId);
    if (!deleted) throw notFoundResponse(mediaId);
    return deleted;
  }

  @Post(':mediaId/share/:userId')
  @ApiParam({ name: 'mediaId', type: String, required: true })
  @ApiParam({ name: 'userId', type: String, required: true })
  @MediaPostResponse({ type: ShareItem })
  async share(
    @Param('mediaId', new ObjectIdPipe()) mediaId: ObjectId,
    @Param('userId', new ObjectIdPipe()) userId: ObjectId,
    @GetUserId() createdBy: ObjectId,
    @Res() response: Response
  ) {
    console.log('the id', mediaId);
    const { title } = await this.mediaItemService.findOne(mediaId);
    if (!title && !createdBy) return response.status(HttpStatus.NOT_FOUND);

    const shareItem = await this.shareItemService.createMediaShareItem({
      createdBy,
      userId,
      mediaId,
      title,
    });
    response.status(HttpStatus.CREATED);
    return response.send(shareItem);
  }
}
