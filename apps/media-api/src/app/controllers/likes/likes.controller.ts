import { ObjectId } from 'mongodb';
import { Controller, Post, Param, Delete } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ObjectIdPipe } from '@mediashare/shared';

import { LikesService } from './likes.service';
import { GetUserId } from '@api-core/decorators/user.decorator';
import { LikeResponse } from './decorators/likes.decorator';

@ApiTags('likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('playlist/:playlistId')
  @ApiParam({ name: 'playlistId', type: String, required: true })
  @LikeResponse()
  async createPlaylistView(@Param('playlistId', new ObjectIdPipe()) playlistId: ObjectId, @GetUserId() createdBy: ObjectId) {
    return await this.likesService.create({ playlistId, createdBy });
  }

  @Post('mediaItem/:mediaId')
  @ApiParam({ name: 'mediaId', type: String, required: true })
  @LikeResponse()
  async createMediaView(@Param('mediaId', new ObjectIdPipe()) mediaId: ObjectId, @GetUserId() createdBy: ObjectId) {
    return await this.likesService.create({ mediaId, createdBy });
  }

  @Delete(':likeId')
  @ApiParam({ name: 'mediaId', type: String, required: true })
  @LikeResponse()
  async remove(@Param('likeId') likeId: string) {
    return await this.likesService.remove(likeId);
  }
}
