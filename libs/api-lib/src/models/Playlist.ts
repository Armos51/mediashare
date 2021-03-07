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

/**
 * @export
 * @interface Playlist
 */
export interface Playlist {
  /**
   * @type {object}
   * @memberof Playlist
   */
  _id: object;
  /**
   * @type {string}
   * @memberof Playlist
   */
  readonly createdAt: string;
  /**
   * @type {string}
   * @memberof Playlist
   */
  readonly updatedDate?: string;
  /**
   * Created by type is generated by the @CreateDto decorator
   * @type {object}
   * @memberof Playlist
   */
  createdBy: object;
  /**
   * Created by type is generated by the @CreateDto decorator
   * @type {object}
   * @memberof Playlist
   */
  userId: object;
  /**
   * @type {string}
   * @memberof Playlist
   */
  title: string;
  /**
   * @type {string}
   * @memberof Playlist
   */
  category: PlaylistCategoryEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum PlaylistCategoryEnum {
  Rehab = 'rehab',
  Builder = 'builder',
  Warmup = 'warmup',
}
