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

/**
 *
 * @export
 * @interface CreatePlaylistDto
 */
export interface CreatePlaylistDto {
  /**
   *
   * @type {string}
   * @memberof CreatePlaylistDto
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof CreatePlaylistDto
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof CreatePlaylistDto
   */
  imageSrc: string;
  /**
   *
   * @type {string}
   * @memberof CreatePlaylistDto
   */
  category: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CreatePlaylistDto
   */
  mediaIds: Array<string>;
}
