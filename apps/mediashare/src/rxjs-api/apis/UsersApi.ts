// tslint:disable
/**
 * Mediashare
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
import { PlaylistResponseDto, UpdateUserDto, UserDto } from '../models';

export interface UsersControllerFindOneRequest {
  userId: string;
}

export interface UsersControllerGetPlaylistsRequest {
  userId: string;
}

export interface UsersControllerReadSharedItemRequest {
  shareId: string;
}

export interface UsersControllerRemoveRequest {
  userId: string;
}

export interface UsersControllerSetRolesRequest {
  userId: string;
  requestBody: Array<string>;
}

export interface UsersControllerUpdateRequest {
  userId: string;
  updateUserDto: UpdateUserDto;
}

/**
 * no description
 */
export class UsersApi extends BaseAPI {
  /**
   */
  usersControllerFindAll(): Observable<Array<UserDto>>;
  usersControllerFindAll(opts?: OperationOpts): Observable<RawAjaxResponse<Array<UserDto>>>;
  usersControllerFindAll(opts?: OperationOpts): Observable<Array<UserDto> | RawAjaxResponse<Array<UserDto>>> {
    return this.request<Array<UserDto>>(
      {
        url: '/api/users',
        method: 'GET',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  usersControllerFindOne({ userId }: UsersControllerFindOneRequest): Observable<UserDto>;
  usersControllerFindOne({ userId }: UsersControllerFindOneRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserDto>>;
  usersControllerFindOne({ userId }: UsersControllerFindOneRequest, opts?: OperationOpts): Observable<UserDto | RawAjaxResponse<UserDto>> {
    throwIfNullOrUndefined(userId, 'userId', 'usersControllerFindOne');

    return this.request<UserDto>(
      {
        url: '/api/users/{userId}'.replace('{userId}', encodeURI(userId)),
        method: 'GET',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  usersControllerGetPlaylists({ userId }: UsersControllerGetPlaylistsRequest): Observable<Array<PlaylistResponseDto>>;
  usersControllerGetPlaylists({ userId }: UsersControllerGetPlaylistsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PlaylistResponseDto>>>;
  usersControllerGetPlaylists(
    { userId }: UsersControllerGetPlaylistsRequest,
    opts?: OperationOpts
  ): Observable<Array<PlaylistResponseDto> | RawAjaxResponse<Array<PlaylistResponseDto>>> {
    throwIfNullOrUndefined(userId, 'userId', 'usersControllerGetPlaylists');

    return this.request<Array<PlaylistResponseDto>>(
      {
        url: '/api/users/{userId}/playlists'.replace('{userId}', encodeURI(userId)),
        method: 'GET',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  usersControllerReadSharedItem({ shareId }: UsersControllerReadSharedItemRequest): Observable<UserDto>;
  usersControllerReadSharedItem({ shareId }: UsersControllerReadSharedItemRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserDto>>;
  usersControllerReadSharedItem({ shareId }: UsersControllerReadSharedItemRequest, opts?: OperationOpts): Observable<UserDto | RawAjaxResponse<UserDto>> {
    throwIfNullOrUndefined(shareId, 'shareId', 'usersControllerReadSharedItem');

    return this.request<UserDto>(
      {
        url: '/api/users/shared-items/{shareId}'.replace('{shareId}', encodeURI(shareId)),
        method: 'POST',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  usersControllerRemove({ userId }: UsersControllerRemoveRequest): Observable<void>;
  usersControllerRemove({ userId }: UsersControllerRemoveRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>;
  usersControllerRemove({ userId }: UsersControllerRemoveRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(userId, 'userId', 'usersControllerRemove');

    return this.request<void>(
      {
        url: '/api/users/{userId}'.replace('{userId}', encodeURI(userId)),
        method: 'DELETE',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  usersControllerSetRoles({ userId, requestBody }: UsersControllerSetRolesRequest): Observable<UserDto>;
  usersControllerSetRoles({ userId, requestBody }: UsersControllerSetRolesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserDto>>;
  usersControllerSetRoles({ userId, requestBody }: UsersControllerSetRolesRequest, opts?: OperationOpts): Observable<UserDto | RawAjaxResponse<UserDto>> {
    throwIfNullOrUndefined(userId, 'userId', 'usersControllerSetRoles');
    throwIfNullOrUndefined(requestBody, 'requestBody', 'usersControllerSetRoles');

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<UserDto>(
      {
        url: '/api/users/{userId}/roles'.replace('{userId}', encodeURI(userId)),
        method: 'PUT',
        headers,
        body: requestBody,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  usersControllerUpdate({ userId, updateUserDto }: UsersControllerUpdateRequest): Observable<UserDto>;
  usersControllerUpdate({ userId, updateUserDto }: UsersControllerUpdateRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserDto>>;
  usersControllerUpdate({ userId, updateUserDto }: UsersControllerUpdateRequest, opts?: OperationOpts): Observable<UserDto | RawAjaxResponse<UserDto>> {
    throwIfNullOrUndefined(userId, 'userId', 'usersControllerUpdate');
    throwIfNullOrUndefined(updateUserDto, 'updateUserDto', 'usersControllerUpdate');

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<UserDto>(
      {
        url: '/api/users/{userId}'.replace('{userId}', encodeURI(userId)),
        method: 'PUT',
        headers,
        body: updateUserDto,
      },
      opts?.responseOpts
    );
  }
}
