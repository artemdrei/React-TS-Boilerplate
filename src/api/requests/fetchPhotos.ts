import request from '@api/requests/setup';
import { IServerPhoto } from '@root/typings';

export const fetchPhotosRequest = async (): Promise<IServerPhoto[]> => {
  try {
    const photos = await request.get('/albums/1/photos');
    if (photos.data) {
      return photos.data.slice(0, 10);
    }
  } catch (e) {
    console.log('error', e);
  }
};
