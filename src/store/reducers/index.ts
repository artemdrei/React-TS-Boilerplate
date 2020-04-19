import { combineReducers } from 'redux';

import todos from './todos';
import photos from './photos';

export const reducers = combineReducers({
  todos,
  photos,
});
