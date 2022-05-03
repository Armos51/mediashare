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
 * @interface Like
 */
export interface Like {
  /**
   * @type {string}
   * @memberof Like
   */
  readonly _id: string;
  /**
   * @type {string}
   * @memberof Like
   */
  readonly createdAt: string;
  /**
   * @type {string}
   * @memberof Like
   */
  readonly updatedDate?: string;
  /**
   * @type {string}
   * @memberof Like
   */
  createdBy: string;
  /**
   * @type {string}
   * @memberof Like
   */
  userId: string;
  /**
   * @type {string}
   * @memberof Like
   */
  playlistId: string;
  /**
   * @type {string}
   * @memberof Like
   */
  mediaId: string;
}
