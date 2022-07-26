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

import { BcRolesType, MediaItemResponseDto, PlaylistResponseDto } from './';

/**
 * @export
 * @interface UserDto
 */
export interface UserDto {
  /**
   * @type {string}
   * @memberof UserDto
   */
  imageSrc: string;
  /**
   * @type {object}
   * @memberof UserDto
   */
  _id: object;
  /**
   * @type {string}
   * @memberof UserDto
   */
  username: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  firstName: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  lastName: string;
  /**
   * @type {BcRolesType}
   * @memberof UserDto
   */
  role: BcRolesType;
  /**
   * @type {string}
   * @memberof UserDto
   */
  email: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  sub: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  createdBy: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  userId: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  phoneNumber: string;
  /**
   * @type {Array<MediaItemResponseDto>}
   * @memberof UserDto
   */
  mediaItems: Array<MediaItemResponseDto>;
  /**
   * @type {Array<PlaylistResponseDto>}
   * @memberof UserDto
   */
  playlists: Array<PlaylistResponseDto>;
  /**
   * @type {Array<string>}
   * @memberof UserDto
   */
  sharedPlaylists: Array<string>;
  /**
   * @type {Array<string>}
   * @memberof UserDto
   */
  sharedMediaItems: Array<string>;
  /**
   * @type {string}
   * @memberof UserDto
   */
  createdAt: string;
  /**
   * @type {string}
   * @memberof UserDto
   */
  updatedDate: string;
}
