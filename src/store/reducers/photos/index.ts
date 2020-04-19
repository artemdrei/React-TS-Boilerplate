import { Reducer } from 'redux';
import { IPhotos } from '@root/typings';
import { IFetchPhotos } from '@store/actions';
import { photos } from '@store/defaultState';

const reducer: Reducer<IPhotos, IFetchPhotos> = (state = photos, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHOTOS':
      return {
        items: payload,
      };
    default:
      return state;
  }
};

export default reducer;
