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

import { MediaCategoryType, TagKeyValue } from './';

/**
 * @export
 * @interface MediaItem
 */
export interface MediaItem {
  /**
   * @type {string}
   * @memberof MediaItem
   */
  readonly _id: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  readonly createdAt: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  readonly updatedDate?: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  createdBy: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  userId: string;
  /**
   * @type {boolean}
   * @memberof MediaItem
   */
  isPlayable: boolean;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  title: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  summary: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  description: string;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  uri: string;
  /**
   * @type {MediaCategoryType}
   * @memberof MediaItem
   */
  category: MediaCategoryType;
  /**
   * @type {Array<TagKeyValue>}
   * @memberof MediaItem
   */
  tags: Array<TagKeyValue> | null;
  /**
   * @type {string}
   * @memberof MediaItem
   */
  thumbnail: string;
}
