import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from './reducers';
import { IState, IAction, TStoreEnhancer } from '@root/types';
import { todos } from './defaultState';

const composeEnhancers: <R>(a: R) => R = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState: IState = {
  todos,
};

const store = createStore<IState, IAction, {}, TStoreEnhancer>(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
