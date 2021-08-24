import { Storage } from 'aws-amplify';
import { createThumbnail } from 'react-native-create-thumbnail';
import { KeyFactory } from './key-factory';

export interface StorageOptions {
  title?: string;
  description?: string;
  summary?: string;
  contentType?: string;
}

export interface PutStorageParams {
  file: any;
  key: string;
  options?: StorageOptions;
}

export function getStorage(key: string) {
  return Storage.get(key);
}

export function putToS3({ key, file, options = {} }: PutStorageParams) {
  const { title = '', description = '', summary = '', contentType = 'video/mp4' } = options;
  console.log(options);
  return Storage.put(key, file, { contentType, metadata: { summary, description }, contentDisposition: title });
}

export async function fetchMedia(path: string) {
  const response = await fetch(path);
  const blob = await response.blob();
  if (!blob) {
    console.log('no blob in storage.service/fetchmedia');
  }
  return blob;
}

export async function fetchAndPutToS3({ fileUri, key, options }: { fileUri: string; key: string; options?: StorageOptions }) {
  const file = await fetchMedia(fileUri);
  console.log(file);
  const putFile = await putToS3({ key, file, options });
  return putFile;
}

export async function uploadMedia({ key, fileUri, options }: { key: string; fileUri: string; options: StorageOptions }) {
  const { videoKey, thumbnailKey } = KeyFactory(key);

  const { path } = await createThumbnail({ url: fileUri });
  const thumbnailResponse = await fetchAndPutToS3({ key: thumbnailKey, fileUri: path, options: { contentType: 'image/jpeg' } });
  const videoResponse = await fetchAndPutToS3({ fileUri, key: videoKey, options });
  return { thumb: thumbnailResponse, video: videoResponse };
}
