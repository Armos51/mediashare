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
 * @interface ShareItem
 */
export interface ShareItem {
  /**
   * @type {object}
   * @memberof ShareItem
   */
  _id: object;
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
   * Created by type is generated by the @CreateDto decorator
   * @type {object}
   * @memberof ShareItem
   */
  createdBy: object;
  /**
   * Created by type is generated by the @CreateDto decorator
   * @type {object}
   * @memberof ShareItem
   */
  readonly userId: object;
  /**
   * @type {object}
   * @memberof ShareItem
   */
  playlistId?: object;
  /**
   * @type {object}
   * @memberof ShareItem
   */
  mediaId?: object;
  /**
   * @type {string}
   * @memberof ShareItem
   */
  title: string;
}
