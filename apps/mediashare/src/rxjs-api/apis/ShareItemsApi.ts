// tslint:disable
/**
 * Mediashare
 * Mediashare API
 *
 * The version of the OpenAPI document: 0.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import { MediaItemResponseDto, PlaylistResponseDto, ShareItem, ShareItemsByUserIdDto, ShareItemsDto, ShareItemsResponseDto } from '../models';

export interface ShareItemControllerFindShareItemRequest {
  shareId: string;
}

export interface ShareItemControllerReadShareItemRequest {
  shareId: string;
}

export interface ShareItemControllerRemoveShareItemRequest {
  shareId: string;
}

export interface ShareItemControllerRemoveShareItemAllRequest {
  shareItemsDto: ShareItemsDto;
}

export interface ShareItemControllerRemoveShareItemAllByUserIdRequest {
  shareItemsByUserIdDto: ShareItemsByUserIdDto;
}

/**
 * no description
 */
export class ShareItemsApi extends BaseAPI {
  /**
   */
  shareItemControllerFindItemsSharedByUser(): Observable<Array<ShareItemsResponseDto>>;
  shareItemControllerFindItemsSharedByUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<ShareItemsResponseDto>>>;
  shareItemControllerFindItemsSharedByUser(opts?: OperationOpts): Observable<Array<ShareItemsResponseDto> | RawAjaxResponse<Array<ShareItemsResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<ShareItemsResponseDto>>(
      {
        url: '/api/share-items/shared-by-user',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerFindItemsSharedWithUser(): Observable<Array<ShareItemsResponseDto>>;
  shareItemControllerFindItemsSharedWithUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<ShareItemsResponseDto>>>;
  shareItemControllerFindItemsSharedWithUser(opts?: OperationOpts): Observable<Array<ShareItemsResponseDto> | RawAjaxResponse<Array<ShareItemsResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<ShareItemsResponseDto>>(
      {
        url: '/api/share-items/shared-with-user',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerFindMediaItemsSharedByUser(): Observable<Array<MediaItemResponseDto>>;
  shareItemControllerFindMediaItemsSharedByUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<MediaItemResponseDto>>>;
  shareItemControllerFindMediaItemsSharedByUser(opts?: OperationOpts): Observable<Array<MediaItemResponseDto> | RawAjaxResponse<Array<MediaItemResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<MediaItemResponseDto>>(
      {
        url: '/api/share-items/shared-by-user/media-items',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerFindMediaItemsSharedWithUser(): Observable<Array<MediaItemResponseDto>>;
  shareItemControllerFindMediaItemsSharedWithUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<MediaItemResponseDto>>>;
  shareItemControllerFindMediaItemsSharedWithUser(
    opts?: OperationOpts
  ): Observable<Array<MediaItemResponseDto> | RawAjaxResponse<Array<MediaItemResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<MediaItemResponseDto>>(
      {
        url: '/api/share-items/shared-with-user/media-items',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerFindPlaylistsSharedByUser(): Observable<Array<PlaylistResponseDto>>;
  shareItemControllerFindPlaylistsSharedByUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<PlaylistResponseDto>>>;
  shareItemControllerFindPlaylistsSharedByUser(opts?: OperationOpts): Observable<Array<PlaylistResponseDto> | RawAjaxResponse<Array<PlaylistResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<PlaylistResponseDto>>(
      {
        url: '/api/share-items/shared-by-user/playlists',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerFindPlaylistsSharedWithUser(): Observable<Array<PlaylistResponseDto>>;
  shareItemControllerFindPlaylistsSharedWithUser(opts?: OperationOpts): Observable<RawAjaxResponse<Array<PlaylistResponseDto>>>;
  shareItemControllerFindPlaylistsSharedWithUser(opts?: OperationOpts): Observable<Array<PlaylistResponseDto> | RawAjaxResponse<Array<PlaylistResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<PlaylistResponseDto>>(
      {
        url: '/api/share-items/shared-with-user/playlists',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerFindShareItem({ shareId }: ShareItemControllerFindShareItemRequest): Observable<ShareItem>;
  shareItemControllerFindShareItem({ shareId }: ShareItemControllerFindShareItemRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ShareItem>>;
  shareItemControllerFindShareItem(
    { shareId }: ShareItemControllerFindShareItemRequest,
    opts?: OperationOpts
  ): Observable<ShareItem | RawAjaxResponse<ShareItem>> {
    throwIfNullOrUndefined(shareId, 'shareId', 'shareItemControllerFindShareItem');

    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<ShareItem>(
      {
        url: '/api/share-items/{shareId}'.replace('{shareId}', encodeURI(shareId)),
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerReadShareItem({ shareId }: ShareItemControllerReadShareItemRequest): Observable<ShareItem>;
  shareItemControllerReadShareItem({ shareId }: ShareItemControllerReadShareItemRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ShareItem>>;
  shareItemControllerReadShareItem(
    { shareId }: ShareItemControllerReadShareItemRequest,
    opts?: OperationOpts
  ): Observable<ShareItem | RawAjaxResponse<ShareItem>> {
    throwIfNullOrUndefined(shareId, 'shareId', 'shareItemControllerReadShareItem');

    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<ShareItem>(
      {
        url: '/api/share-items/read/{shareId}'.replace('{shareId}', encodeURI(shareId)),
        method: 'POST',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerRemoveShareItem({ shareId }: ShareItemControllerRemoveShareItemRequest): Observable<ShareItem>;
  shareItemControllerRemoveShareItem({ shareId }: ShareItemControllerRemoveShareItemRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ShareItem>>;
  shareItemControllerRemoveShareItem(
    { shareId }: ShareItemControllerRemoveShareItemRequest,
    opts?: OperationOpts
  ): Observable<ShareItem | RawAjaxResponse<ShareItem>> {
    throwIfNullOrUndefined(shareId, 'shareId', 'shareItemControllerRemoveShareItem');

    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<ShareItem>(
      {
        url: '/api/share-items/{shareId}'.replace('{shareId}', encodeURI(shareId)),
        method: 'DELETE',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerRemoveShareItemAll({ shareItemsDto }: ShareItemControllerRemoveShareItemAllRequest): Observable<void>;
  shareItemControllerRemoveShareItemAll(
    { shareItemsDto }: ShareItemControllerRemoveShareItemAllRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  shareItemControllerRemoveShareItemAll(
    { shareItemsDto }: ShareItemControllerRemoveShareItemAllRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(shareItemsDto, 'shareItemsDto', 'shareItemControllerRemoveShareItemAll');

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/share-items/unshare-all-items',
        method: 'POST',
        headers,
        body: shareItemsDto,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  shareItemControllerRemoveShareItemAllByUserId({ shareItemsByUserIdDto }: ShareItemControllerRemoveShareItemAllByUserIdRequest): Observable<void>;
  shareItemControllerRemoveShareItemAllByUserId(
    { shareItemsByUserIdDto }: ShareItemControllerRemoveShareItemAllByUserIdRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  shareItemControllerRemoveShareItemAllByUserId(
    { shareItemsByUserIdDto }: ShareItemControllerRemoveShareItemAllByUserIdRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(shareItemsByUserIdDto, 'shareItemsByUserIdDto', 'shareItemControllerRemoveShareItemAllByUserId');

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/share-items/unshare-all-by-user-id',
        method: 'POST',
        headers,
        body: shareItemsByUserIdDto,
      },
      opts?.responseOpts
    );
  }
}
