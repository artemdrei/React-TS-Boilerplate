import request from '@root/api/requests/base';
import { IServerPhoto } from '@root/typings';

export const fetchPhotos = async (): Promise<IServerPhoto[]> => {
  try {
    const photos = await request.get('/albums/1/photos');
    if (photos.data) {
      return photos.data.slice(0, 10);
    }
  } catch (e) {
    console.log('error', e);
  }
};
