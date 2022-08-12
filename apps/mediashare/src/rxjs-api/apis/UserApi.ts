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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    AuthorizeDto,
    InviteDto,
    MediaItemResponseDto,
    ProfileDto,
    UpdateUserDto,
    UserDto,
} from '../models';

export interface UserControllerAuthorizeRequest {
    authorizeDto: AuthorizeDto;
}

export interface UserControllerInviteRequest {
    inviteDto: InviteDto;
}

export interface UserControllerUpdateUserRequest {
    updateUserDto: UpdateUserDto;
}

/**
 * no description
 */
export class UserApi extends BaseAPI {

    /**
     */
    userControllerAuthorize({ authorizeDto }: UserControllerAuthorizeRequest): Observable<ProfileDto>
    userControllerAuthorize({ authorizeDto }: UserControllerAuthorizeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ProfileDto>>
    userControllerAuthorize({ authorizeDto }: UserControllerAuthorizeRequest, opts?: OperationOpts): Observable<ProfileDto | RawAjaxResponse<ProfileDto>> {
        throwIfNullOrUndefined(authorizeDto, 'authorizeDto', 'userControllerAuthorize');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ProfileDto>({
            url: '/api/user/authorize',
            method: 'POST',
            headers,
            body: authorizeDto,
        }, opts?.responseOpts);
    };

    /**
     */
    userControllerGetUser(): Observable<ProfileDto>
    userControllerGetUser(opts?: OperationOpts): Observable<RawAjaxResponse<ProfileDto>>
    userControllerGetUser(opts?: OperationOpts): Observable<ProfileDto | RawAjaxResponse<ProfileDto>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<ProfileDto>({
            url: '/api/user',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    userControllerGetUserMediaItems(): Observable<Array<MediaItemResponseDto>>
    userControllerGetUserMediaItems(opts?: OperationOpts): Observable<RawAjaxResponse<Array<MediaItemResponseDto>>>
    userControllerGetUserMediaItems(opts?: OperationOpts): Observable<Array<MediaItemResponseDto> | RawAjaxResponse<Array<MediaItemResponseDto>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<MediaItemResponseDto>>({
            url: '/api/user/media-items',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    userControllerInvite({ inviteDto }: UserControllerInviteRequest): Observable<ProfileDto>
    userControllerInvite({ inviteDto }: UserControllerInviteRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ProfileDto>>
    userControllerInvite({ inviteDto }: UserControllerInviteRequest, opts?: OperationOpts): Observable<ProfileDto | RawAjaxResponse<ProfileDto>> {
        throwIfNullOrUndefined(inviteDto, 'inviteDto', 'userControllerInvite');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ProfileDto>({
            url: '/api/user/invite',
            method: 'POST',
            headers,
            body: inviteDto,
        }, opts?.responseOpts);
    };

    /**
     */
    userControllerLogout(): Observable<void>
    userControllerLogout(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    userControllerLogout(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        return this.request<void>({
            url: '/api/user/logout',
            method: 'POST',
        }, opts?.responseOpts);
    };

    /**
     */
    userControllerUpdateUser({ updateUserDto }: UserControllerUpdateUserRequest): Observable<UserDto>
    userControllerUpdateUser({ updateUserDto }: UserControllerUpdateUserRequest, opts?: OperationOpts): Observable<RawAjaxResponse<UserDto>>
    userControllerUpdateUser({ updateUserDto }: UserControllerUpdateUserRequest, opts?: OperationOpts): Observable<UserDto | RawAjaxResponse<UserDto>> {
        throwIfNullOrUndefined(updateUserDto, 'updateUserDto', 'userControllerUpdateUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<UserDto>({
            url: '/api/user',
            method: 'PUT',
            headers,
            body: updateUserDto,
        }, opts?.responseOpts);
    };

}
