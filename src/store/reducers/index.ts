import { combineReducers } from 'redux';

import todos from './todos/index';

export const reducers = combineReducers({
  todos,
});
