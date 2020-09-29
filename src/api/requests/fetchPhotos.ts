import request from '@root/api/requests/base';
import { IServerPhoto } from '@root/typings';

export const fetchPhotos = async (): Promise<IServerPhoto[]> => {
  const photos = await request.get('/albums/1/photos');
  return photos.data.slice(0, 10);
};
