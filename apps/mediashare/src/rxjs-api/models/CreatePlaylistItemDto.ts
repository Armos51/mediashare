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

/**
 * @export
 * @interface CreatePlaylistItemDto
 */
export interface CreatePlaylistItemDto {
    /**
     * @type {string}
     * @memberof CreatePlaylistItemDto
     */
    playlistId: string;
    /**
     * @type {string}
     * @memberof CreatePlaylistItemDto
     */
    mediaId: string;
    /**
     * @type {number}
     * @memberof CreatePlaylistItemDto
     */
    sortIndex: number;
}
