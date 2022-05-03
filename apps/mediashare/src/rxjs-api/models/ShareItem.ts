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
 * @interface ShareItem
 */
export interface ShareItem {
  /**
   * @type {string}
   * @memberof ShareItem
   */
  readonly _id: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  readonly createdAt: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  readonly updatedDate?: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  createdBy: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  readonly userId: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  playlistId?: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  mediaId?: string;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  title: string;
}
