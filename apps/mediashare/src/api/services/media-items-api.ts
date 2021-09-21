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
import { CreateMediaItemDto } from '../models';
// @ts-ignore
import { MediaItem } from '../models';
// @ts-ignore
import { MediaItemDto } from '../models';
// @ts-ignore
import { ShareItem } from '../models';
// @ts-ignore
import { UpdateMediaItemDto } from '../models';
/**
 * MediaItemsApi - axios parameter creator
 * @export
 */
export const MediaItemsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @param {CreateMediaItemDto} createMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerCreate: async (createMediaItemDto: CreateMediaItemDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'createMediaItemDto' is not null or undefined
      assertParamExists('mediaItemControllerCreate', 'createMediaItemDto', createMediaItemDto);
      const localVarPath = `/api/media-items`;
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

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(createMediaItemDto, localVarRequestOptions, configuration);

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
    mediaItemControllerFindAll: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/media-items`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
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
    /**
     *
     * @param {string} mediaId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerFindOne: async (mediaId: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'mediaId' is not null or undefined
      assertParamExists('mediaItemControllerFindOne', 'mediaId', mediaId);
      const localVarPath = `/api/media-items/{mediaId}`.replace(`{${'mediaId'}}`, encodeURIComponent(String(mediaId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
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
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerGetCategories: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/media-items/categories`;
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
     * @param {string} mediaId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerRemove: async (mediaId: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'mediaId' is not null or undefined
      assertParamExists('mediaItemControllerRemove', 'mediaId', mediaId);
      const localVarPath = `/api/media-items/{mediaId}`.replace(`{${'mediaId'}}`, encodeURIComponent(String(mediaId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
     * @param {string} mediaId
     * @param {string} userId
     * @param {CreateMediaItemDto} createMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerShare: async (mediaId: string, userId: string, createMediaItemDto: CreateMediaItemDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'mediaId' is not null or undefined
      assertParamExists('mediaItemControllerShare', 'mediaId', mediaId);
      // verify required parameter 'userId' is not null or undefined
      assertParamExists('mediaItemControllerShare', 'userId', userId);
      // verify required parameter 'createMediaItemDto' is not null or undefined
      assertParamExists('mediaItemControllerShare', 'createMediaItemDto', createMediaItemDto);
      const localVarPath = `/api/media-items/{mediaId}/share/{userId}`
        .replace(`{${'mediaId'}}`, encodeURIComponent(String(mediaId)))
        .replace(`{${'userId'}}`, encodeURIComponent(String(userId)));
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

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(createMediaItemDto, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} mediaId
     * @param {UpdateMediaItemDto} updateMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerUpdate: async (mediaId: string, updateMediaItemDto: UpdateMediaItemDto, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'mediaId' is not null or undefined
      assertParamExists('mediaItemControllerUpdate', 'mediaId', mediaId);
      // verify required parameter 'updateMediaItemDto' is not null or undefined
      assertParamExists('mediaItemControllerUpdate', 'updateMediaItemDto', updateMediaItemDto);
      const localVarPath = `/api/media-items/{mediaId}`.replace(`{${'mediaId'}}`, encodeURIComponent(String(mediaId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      localVarRequestOptions.data = serializeDataIfNeeded(updateMediaItemDto, localVarRequestOptions, configuration);

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * MediaItemsApi - functional programming interface
 * @export
 */
export const MediaItemsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MediaItemsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {CreateMediaItemDto} createMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerCreate(
      createMediaItemDto: CreateMediaItemDto,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaItem>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerCreate(createMediaItemDto, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerFindAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MediaItemDto>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerFindAll(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {string} mediaId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerFindOne(mediaId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaItemDto>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerFindOne(mediaId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerGetCategories(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerGetCategories(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {string} mediaId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerRemove(mediaId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerRemove(mediaId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {string} mediaId
     * @param {string} userId
     * @param {CreateMediaItemDto} createMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerShare(
      mediaId: string,
      userId: string,
      createMediaItemDto: CreateMediaItemDto,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShareItem>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerShare(mediaId, userId, createMediaItemDto, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @param {string} mediaId
     * @param {UpdateMediaItemDto} updateMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mediaItemControllerUpdate(
      mediaId: string,
      updateMediaItemDto: UpdateMediaItemDto,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaItem>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mediaItemControllerUpdate(mediaId, updateMediaItemDto, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
  };
};

/**
 * MediaItemsApi - factory interface
 * @export
 */
export const MediaItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = MediaItemsApiFp(configuration);
  return {
    /**
     *
     * @param {CreateMediaItemDto} createMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerCreate(createMediaItemDto: CreateMediaItemDto, options?: any): AxiosPromise<MediaItem> {
      return localVarFp.mediaItemControllerCreate(createMediaItemDto, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerFindAll(options?: any): AxiosPromise<Array<MediaItemDto>> {
      return localVarFp.mediaItemControllerFindAll(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} mediaId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerFindOne(mediaId: string, options?: any): AxiosPromise<MediaItemDto> {
      return localVarFp.mediaItemControllerFindOne(mediaId, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerGetCategories(options?: any): AxiosPromise<void> {
      return localVarFp.mediaItemControllerGetCategories(options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} mediaId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerRemove(mediaId: string, options?: any): AxiosPromise<void> {
      return localVarFp.mediaItemControllerRemove(mediaId, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} mediaId
     * @param {string} userId
     * @param {CreateMediaItemDto} createMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerShare(mediaId: string, userId: string, createMediaItemDto: CreateMediaItemDto, options?: any): AxiosPromise<ShareItem> {
      return localVarFp.mediaItemControllerShare(mediaId, userId, createMediaItemDto, options).then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} mediaId
     * @param {UpdateMediaItemDto} updateMediaItemDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mediaItemControllerUpdate(mediaId: string, updateMediaItemDto: UpdateMediaItemDto, options?: any): AxiosPromise<MediaItem> {
      return localVarFp.mediaItemControllerUpdate(mediaId, updateMediaItemDto, options).then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for mediaItemControllerCreate operation in MediaItemsApi.
 * @export
 * @interface MediaItemsApiMediaItemControllerCreateRequest
 */
export interface MediaItemsApiMediaItemControllerCreateRequest {
  /**
   *
   * @type {CreateMediaItemDto}
   * @memberof MediaItemsApiMediaItemControllerCreate
   */
  readonly createMediaItemDto: CreateMediaItemDto;
}

/**
 * Request parameters for mediaItemControllerFindOne operation in MediaItemsApi.
 * @export
 * @interface MediaItemsApiMediaItemControllerFindOneRequest
 */
export interface MediaItemsApiMediaItemControllerFindOneRequest {
  /**
   *
   * @type {string}
   * @memberof MediaItemsApiMediaItemControllerFindOne
   */
  readonly mediaId: string;
}

/**
 * Request parameters for mediaItemControllerRemove operation in MediaItemsApi.
 * @export
 * @interface MediaItemsApiMediaItemControllerRemoveRequest
 */
export interface MediaItemsApiMediaItemControllerRemoveRequest {
  /**
   *
   * @type {string}
   * @memberof MediaItemsApiMediaItemControllerRemove
   */
  readonly mediaId: string;
}

/**
 * Request parameters for mediaItemControllerShare operation in MediaItemsApi.
 * @export
 * @interface MediaItemsApiMediaItemControllerShareRequest
 */
export interface MediaItemsApiMediaItemControllerShareRequest {
  /**
   *
   * @type {string}
   * @memberof MediaItemsApiMediaItemControllerShare
   */
  readonly mediaId: string;

  /**
   *
   * @type {string}
   * @memberof MediaItemsApiMediaItemControllerShare
   */
  readonly userId: string;

  /**
   *
   * @type {CreateMediaItemDto}
   * @memberof MediaItemsApiMediaItemControllerShare
   */
  readonly createMediaItemDto: CreateMediaItemDto;
}

/**
 * Request parameters for mediaItemControllerUpdate operation in MediaItemsApi.
 * @export
 * @interface MediaItemsApiMediaItemControllerUpdateRequest
 */
export interface MediaItemsApiMediaItemControllerUpdateRequest {
  /**
   *
   * @type {string}
   * @memberof MediaItemsApiMediaItemControllerUpdate
   */
  readonly mediaId: string;

  /**
   *
   * @type {UpdateMediaItemDto}
   * @memberof MediaItemsApiMediaItemControllerUpdate
   */
  readonly updateMediaItemDto: UpdateMediaItemDto;
}

/**
 * MediaItemsApi - object-oriented interface
 * @export
 * @class MediaItemsApi
 * @extends {BaseAPI}
 */
export class MediaItemsApi extends BaseAPI {
  /**
   *
   * @param {MediaItemsApiMediaItemControllerCreateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerCreate(requestParameters: MediaItemsApiMediaItemControllerCreateRequest, options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerCreate(requestParameters.createMediaItemDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerFindAll(options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerFindAll(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {MediaItemsApiMediaItemControllerFindOneRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerFindOne(requestParameters: MediaItemsApiMediaItemControllerFindOneRequest, options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerFindOne(requestParameters.mediaId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerGetCategories(options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerGetCategories(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {MediaItemsApiMediaItemControllerRemoveRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerRemove(requestParameters: MediaItemsApiMediaItemControllerRemoveRequest, options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerRemove(requestParameters.mediaId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {MediaItemsApiMediaItemControllerShareRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerShare(requestParameters: MediaItemsApiMediaItemControllerShareRequest, options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerShare(requestParameters.mediaId, requestParameters.userId, requestParameters.createMediaItemDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {MediaItemsApiMediaItemControllerUpdateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MediaItemsApi
   */
  public mediaItemControllerUpdate(requestParameters: MediaItemsApiMediaItemControllerUpdateRequest, options?: any) {
    return MediaItemsApiFp(this.configuration)
      .mediaItemControllerUpdate(requestParameters.mediaId, requestParameters.updateMediaItemDto, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
