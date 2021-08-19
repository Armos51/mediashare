/* tslint:disable */
/* eslint-disable */
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

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { LoginDto } from '../models';
// @ts-ignore
import { LoginResponseDto } from '../models';
// @ts-ignore
import { MediaItemDto } from '../models';
// @ts-ignore
import { Playlist } from '../models';
// @ts-ignore
import { ShareItem } from '../models';
// @ts-ignore
import { TokenDto } from '../models';
// @ts-ignore
import { UserDto } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} id
     * @param {TokenDto} tokenDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerAuthorize: async (id: string, tokenDto: TokenDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('userControllerAuthorize', 'id', id);
      // verify required parameter 'tokenDto' is not null or undefined
      assertParamExists('userControllerAuthorize', 'tokenDto', tokenDto);
      const localVarPath = `/api/user/authorize`.replace(`{${':id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(tokenDto, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetMediaItems: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/user/media-items`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetMyShareItems: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/user/playlists/shared`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetPlaylists: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/user/playlists`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetSharedMediaItems: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/user/media-items/shared`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetUser: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/user`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {LoginDto} loginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerLogin: async (loginDto: LoginDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'loginDto' is not null or undefined
      assertParamExists('userControllerLogin', 'loginDto', loginDto);
      const localVarPath = `/api/user/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(loginDto, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerLogout: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/user/logout`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} id
     * @param {TokenDto} tokenDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerAuthorize(id: string, tokenDto: TokenDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerAuthorize(id, tokenDto, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerGetMediaItems(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDto>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetMediaItems(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerGetMyShareItems(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShareItem>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetMyShareItems(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerGetPlaylists(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Playlist>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetPlaylists(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerGetSharedMediaItems(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MediaItemDto>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetSharedMediaItems(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerGetUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDto>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetUser(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {LoginDto} loginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerLogin(loginDto: LoginDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDto>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerLogin(loginDto, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userControllerLogout(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerLogout(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = UserApiFp(configuration);
  return {
    /**
     *
     * @param {string} id
     * @param {TokenDto} tokenDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerAuthorize(id: string, tokenDto: TokenDto, options?: any): AxiosPromise<void> {
      return localVarFp.userControllerAuthorize(id, tokenDto, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetMediaItems(options?: any): AxiosPromise<UserDto> {
      return localVarFp.userControllerGetMediaItems(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetMyShareItems(options?: any): AxiosPromise<Array<ShareItem>> {
      return localVarFp.userControllerGetMyShareItems(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetPlaylists(options?: any): AxiosPromise<Playlist> {
      return localVarFp.userControllerGetPlaylists(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetSharedMediaItems(options?: any): AxiosPromise<Array<MediaItemDto>> {
      return localVarFp.userControllerGetSharedMediaItems(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerGetUser(options?: any): AxiosPromise<UserDto> {
      return localVarFp.userControllerGetUser(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {LoginDto} loginDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerLogin(loginDto: LoginDto, options?: any): AxiosPromise<LoginResponseDto> {
      return localVarFp.userControllerLogin(loginDto, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userControllerLogout(options?: any): AxiosPromise<void> {
      return localVarFp.userControllerLogout(options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for userControllerAuthorize operation in UserApi.
 * @export
 * @interface UserApiUserControllerAuthorizeRequest
 */
export interface UserApiUserControllerAuthorizeRequest {
  /**
   *
   * @type {string}
   * @memberof UserApiUserControllerAuthorize
   */
  readonly id: string;

  /**
   *
   * @type {TokenDto}
   * @memberof UserApiUserControllerAuthorize
   */
  readonly tokenDto: TokenDto;
}

/**
 * Request parameters for userControllerLogin operation in UserApi.
 * @export
 * @interface UserApiUserControllerLoginRequest
 */
export interface UserApiUserControllerLoginRequest {
  /**
   *
   * @type {LoginDto}
   * @memberof UserApiUserControllerLogin
   */
  readonly loginDto: LoginDto;
}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
  /**
   *
   * @param {UserApiUserControllerAuthorizeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerAuthorize(requestParameters: UserApiUserControllerAuthorizeRequest, options?: any) {
    return UserApiFp(this.configuration)
      .userControllerAuthorize(requestParameters.id, requestParameters.tokenDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerGetMediaItems(options?: any) {
    return UserApiFp(this.configuration)
      .userControllerGetMediaItems(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerGetMyShareItems(options?: any) {
    return UserApiFp(this.configuration)
      .userControllerGetMyShareItems(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerGetPlaylists(options?: any) {
    return UserApiFp(this.configuration)
      .userControllerGetPlaylists(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerGetSharedMediaItems(options?: any) {
    return UserApiFp(this.configuration)
      .userControllerGetSharedMediaItems(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerGetUser(options?: any) {
    return UserApiFp(this.configuration)
      .userControllerGetUser(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UserApiUserControllerLoginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerLogin(requestParameters: UserApiUserControllerLoginRequest, options?: any) {
    return UserApiFp(this.configuration)
      .userControllerLogin(requestParameters.loginDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userControllerLogout(options?: any) {
    return UserApiFp(this.configuration)
      .userControllerLogout(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
