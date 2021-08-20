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

/**
 * @export
 * @interface UserDto
 */
export interface UserDto {
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
  _id: string;
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
