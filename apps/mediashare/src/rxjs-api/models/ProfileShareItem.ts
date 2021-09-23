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
 * @interface ProfileShareItem
 */
export interface ProfileShareItem {
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  createdAt: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  authorImage: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  authorName: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  author: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  authorId: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  imageSrc: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  playlistId: string;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  shareItemId: string;
  /**
   * @type {boolean}
   * @memberof ProfileShareItem
   */
  read: boolean;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  role: ProfileShareItemRoleEnum;
  /**
   * @type {string}
   * @memberof ProfileShareItem
   */
  title: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ProfileShareItemRoleEnum {
  Guest = 'guest',
  User = 'user',
  Admin = 'admin',
}
