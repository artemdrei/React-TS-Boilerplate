import { IServerPhoto, IPhoto } from '@root/typings';

export const mapPhotos = (photos: IServerPhoto[]): IPhoto[] => {
  return photos.map(({ id, title, url }) => ({ id, title, url }));
};
