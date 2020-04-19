import { IAction, IDispatch, IPhoto } from '@root/typings';
import { fetchPhotosRequest } from '@api/requests';

type TFetchPhotos = () => (dispatch: IDispatch) => void;
export interface IFetchPhotos extends IAction<'FETCH_PHOTOS'> {
  payload: IPhoto[];
}

export const fetchPhotos: TFetchPhotos = () => async (dispatch) => {
  console.log('__SHOW LOADER__');
  try {
    const photos = await fetchPhotosRequest();
    console.log('photos:', photos);

    const action: IFetchPhotos = {
      type: 'FETCH_PHOTOS',
      payload: photos,
    };

    dispatch(action);
  } catch (e) {
    console.log('fetchPhotos redux action error', e);
  } finally {
    console.log('__HIDE LOADER__');
  }
};
