// tslint:disable
/**
 *
 * Media Share API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import { CreatePlaylistResponseDto, Playlist, PlaylistResponseDto, ShareItem, UpdatePlaylistDto } from '../models';

export interface PlaylistControllerRemoveRequest {
  playlistId: string;
}

export interface PlaylistControllerUpdateRequest {
  updatePlaylistDto: UpdatePlaylistDto;
}

/**
 * no description
 */
export class PlaylistsApi extends BaseAPI {
  /**
   */
  playlistControllerCreate(): Observable<CreatePlaylistResponseDto>;
  playlistControllerCreate(opts?: OperationOpts): Observable<RawAjaxResponse<CreatePlaylistResponseDto>>;
  playlistControllerCreate(
    opts?: OperationOpts
  ): Observable<CreatePlaylistResponseDto | RawAjaxResponse<CreatePlaylistResponseDto>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<CreatePlaylistResponseDto>(
      {
        url: '/api/playlists',
        method: 'POST',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  playlistControllerFindAll(): Observable<Array<PlaylistResponseDto>>;
  playlistControllerFindAll(opts?: OperationOpts): Observable<RawAjaxResponse<Array<PlaylistResponseDto>>>;
  playlistControllerFindAll(
    opts?: OperationOpts
  ): Observable<Array<PlaylistResponseDto> | RawAjaxResponse<Array<PlaylistResponseDto>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<PlaylistResponseDto>>(
      {
        url: '/api/playlists',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  playlistControllerFindOne(): Observable<PlaylistResponseDto>;
  playlistControllerFindOne(opts?: OperationOpts): Observable<RawAjaxResponse<PlaylistResponseDto>>;
  playlistControllerFindOne(
    opts?: OperationOpts
  ): Observable<PlaylistResponseDto | RawAjaxResponse<PlaylistResponseDto>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<PlaylistResponseDto>(
      {
        url: '/api/playlists/{playlistId}',
        method: 'GET',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  playlistControllerGetCategories(): Observable<void>;
  playlistControllerGetCategories(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>;
  playlistControllerGetCategories(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
    return this.request<void>(
      {
        url: '/api/playlists/categories',
        method: 'GET',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  playlistControllerRemove({ playlistId }: PlaylistControllerRemoveRequest): Observable<void>;
  playlistControllerRemove(
    { playlistId }: PlaylistControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  playlistControllerRemove(
    { playlistId }: PlaylistControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(playlistId, 'playlistId', 'playlistControllerRemove');

    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<void>(
      {
        url: '/api/playlists/{playlistId}'.replace('{playlistId}', encodeURI(playlistId)),
        method: 'DELETE',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  playlistControllerShare(): Observable<Array<ShareItem>>;
  playlistControllerShare(opts?: OperationOpts): Observable<RawAjaxResponse<Array<ShareItem>>>;
  playlistControllerShare(opts?: OperationOpts): Observable<Array<ShareItem> | RawAjaxResponse<Array<ShareItem>>> {
    const headers: HttpHeaders = {
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Array<ShareItem>>(
      {
        url: '/api/playlists/{playlistId}/share/{sharedUserId}',
        method: 'POST',
        headers,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  playlistControllerUpdate({ updatePlaylistDto }: PlaylistControllerUpdateRequest): Observable<Playlist>;
  playlistControllerUpdate(
    { updatePlaylistDto }: PlaylistControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<Playlist>>;
  playlistControllerUpdate(
    { updatePlaylistDto }: PlaylistControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<Playlist | RawAjaxResponse<Playlist>> {
    throwIfNullOrUndefined(updatePlaylistDto, 'updatePlaylistDto', 'playlistControllerUpdate');

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
      ...(this.configuration.username != null && this.configuration.password != null
        ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` }
        : undefined),
    };

    return this.request<Playlist>(
      {
        url: '/api/playlists/{playlistId}',
        method: 'PUT',
        headers,
        body: updatePlaylistDto,
      },
      opts?.responseOpts
    );
  }
}
