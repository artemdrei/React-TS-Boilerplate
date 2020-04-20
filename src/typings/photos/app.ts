export interface IPhoto {
  id: number;
  title: string;
  url: string;
}

export interface IPhotos {
  items: IPhoto[];
}
