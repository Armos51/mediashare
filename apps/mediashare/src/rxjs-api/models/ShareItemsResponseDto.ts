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

import { PlaylistItemResponseDto } from './';

/**
 * @export
 * @interface ShareItemsResponseDto
 */
export interface ShareItemsResponseDto {
  /**
   * all items that are shared with a particular user
   * @type {PlaylistItemResponseDto}
   * @memberof ShareItemsResponseDto
   */
  sharedMedia: PlaylistItemResponseDto;
  /**
   * all items that are shared with a particular user
   * @type {PlaylistItemResponseDto}
   * @memberof ShareItemsResponseDto
   */
  sharedPlaylists: PlaylistItemResponseDto;
}
