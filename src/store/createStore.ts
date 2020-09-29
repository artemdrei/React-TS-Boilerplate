import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { IState, IAction, TStoreEnhancer } from '@root/typings';
import { reducers } from './reducers';
import { todos, photos } from './defaultState';

const composeEnhancers: <R>(a: R) => R = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState: IState = {
  todos,
  photos,
};

const store = createStore<IState, IAction, Record<string, unknown>, TStoreEnhancer>(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
