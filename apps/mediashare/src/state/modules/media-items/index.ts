import { AsyncThunk, createAction, createAsyncThunk, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from 'aws-amplify';

import { makeEnum } from '../../core/factory';

import * as reducers from '../../core/reducers';

import { apis, ApiService } from '../../apis';
import { CreateMediaItemDto, UpdateMediaItemDto } from '../../../api';
import { number, string } from '@hapi/joi';
import { AwsMediaItem } from './aws-media-item.model';
import { MediaViewItem } from './media-view-item.model';
import { Blob } from 'buffer';
import { MediaItem } from '../../../rxjs-api';

const MEDIA_ITEM_ACTIONS = ['GET_MEDIA_ITEM', 'ADD_MEDIA_ITEM', 'UPDATE_MEDIA_ITEM', 'SHARE_MEDIA_ITEM', 'REMOVE_MEDIA_ITEM', 'UPLOAD_MEDIA_ITEM'] as const;
const MEDIA_ITEMS_ACTIONS = ['FIND_MEDIA_ITEMS'] as const;

export const mediaItemActionTypes = makeEnum(MEDIA_ITEM_ACTIONS);
export const mediaItemsActionTypes = makeEnum(MEDIA_ITEMS_ACTIONS);

export const selectMediaItem = createAction<MediaViewItem, 'selectMediaItem'>('selectMediaItem');
export const getMediaItemById = createAsyncThunk(mediaItemActionTypes.getMediaItem, async (id: string) => {
  const response = (await Storage.get(id, {})) as string;
  return response;
});

export const addMediaItem = createAsyncThunk(
  mediaItemActionTypes.addMediaItem,
  async (dto: Pick<CreateMediaItemDto, 'category' | 'description' | 'summary' | 'title' | 'key' | 'uri'>) => {
    try {
      const { uri: fileUri, key: initialKey, ...partialDto } = dto;
      const file = await fetch(fileUri);
      const blob = await file.blob();
      if (!blob) {
        throw new Error('no file blob in add media  item');
      }
      const response = (await Storage.put(initialKey, blob, {
        contentType: 'video/mp4',
        contentDisposition: dto.title,
        metaData: { description: dto.description, summary: dto.summary },
      })) as any;
      if (!response) {
        throw new Error('no response in add media  item');
      }
      console.log(response);
      const createMediaItemDto: CreateMediaItemDto = { ...partialDto, key: initialKey, uri: initialKey, isPlayable: true };
      const mediaItem = await apis.mediaItems.mediaItemControllerCreate({ createMediaItemDto }).toPromise();
      return mediaItem;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateMediaItem = createAsyncThunk(mediaItemActionTypes.updateMediaItem, async (item: UpdateMediaItemDto, { extra }) => {
  const { api } = extra as { api: ApiService };
  const response = await api.mediaItems.mediaItemControllerUpdate({ mediaId: item._id, updateMediaItemDto: item });
  return response && response.status === 200 ? response.data : undefined;
});

export const shareMediaItem = createAsyncThunk(
  mediaItemActionTypes.shareMediaItem,
  async (args: { id: string; userId: string; item: CreateMediaItemDto }, { extra }) => {
    const { api } = extra as { api: ApiService };
    const response = await api.mediaItems.mediaItemControllerShare({ mediaId: args.id, userId: args.userId, createMediaItemDto: args.item });
    return response;
  }
);

export const removeMediaItem = createAsyncThunk(mediaItemActionTypes.updateMediaItem, async (id: string, { extra }) => {
  const { api } = extra as { api: ApiService };
  const response = await api.mediaItems.mediaItemControllerRemove({ mediaId: id });
  return response && response.status === 200 ? response.data : undefined;
});

export const findMediaItems = createAsyncThunk(mediaItemsActionTypes.findMediaItems, async () => {
  // @ts-ignore
  const response = await Storage.list('');

  return response as AwsMediaItem[];
});

const initialState: { mediaItems: AwsMediaItem[]; loading: boolean } = {
  loading: false,
  mediaItems: [],
};

const initialMediaItemState: { getMediaItem: string; loading: boolean; selectedMediaItem: MediaViewItem; file: any; mediaItem: MediaItem } = {
  getMediaItem: null,
  selectedMediaItem: null,
  mediaItem: null,
  loading: false,
  file: null,
};

export const MEDIA_ITEMS_STATE_KEY = 'mediaItems';

const mediaItemReducer = createReducer(
  initialMediaItemState,
  (builder) => {
    // builder.addCase(findMediaItems.fulfilled, (state, action) => {
    //   return { ...state, mediaItems: action.payload, loading: false };
    // })

    // .addCase(findMediaItems.fulfilled, reducers.addItem(MEDIA_ITEMS_STATE_KEY))
    builder
      .addCase(getMediaItemById.rejected, reducers.rejectedReducer('getMediaItem'))
      .addCase(getMediaItemById.pending, (state) => ({ ...state, loading: true }))
      .addCase(getMediaItemById.fulfilled, (state, action) => ({ ...state, getMediaItem: action.payload, loading: false }))
      .addCase(addMediaItem.pending, (state, action) => {
        console.log(state, action);
        return { ...state, loading: true };
      })
      .addCase(addMediaItem.rejected, (state, action) => {
        console.log(state, action);
        return { ...state, loading: false };
      });
    builder
      .addCase(addMediaItem.fulfilled, (state, action) => {
        console.log(state, action.payload);
        return { ...state, loading: false, mediaItem: action.payload };
      })
      .addCase(selectMediaItem, (state, action) => {
        return { ...state, selectedMediaItem: action.payload };
      });
  }
  // .addCase(addMediaItem.fulfilled, reducers.addItem(MEDIA_ITEMS_STATE_KEY))
  // .addCase(updateMediaItem.fulfilled, reducers.updateItem(MEDIA_ITEMS_STATE_KEY))
  // .addCase(shareMediaItem.fulfilled, reducers.updateItem(MEDIA_ITEMS_STATE_KEY))
  // .addCase(removeMediaItem.fulfilled, reducers.removeItem(MEDIA_ITEMS_STATE_KEY))
);

const mediaItemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(findMediaItems.rejected, (state) => {
      return { ...state, loading: false };
    })
    .addCase(findMediaItems.pending, (state, action) => {
      return { ...state, loading: true };
    })
    .addCase(findMediaItems.fulfilled, (state, action) => {
      return { ...state, mediaItems: action.payload, loading: false };
    });
});

export { mediaItemReducer, mediaItemsReducer };
