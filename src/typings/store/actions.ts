import { Action, StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type reduxActions = 'FETCH_TODOS' | 'FETCH_PHOTOS';

/* eslint-ignore @typescript-eslint/no-empty-interface */
export interface IAction<T extends reduxActions = reduxActions> extends Action<T> {}

/* eslint-ignore @typescript-eslint/no-empty-interface */
export interface IDispatch extends ThunkDispatch<Record<string, unknown>, Record<string, unknown>, IAction> {}

export type TStoreEnhancer = StoreEnhancer<{ dispatch: IDispatch }, Record<string, unknown>>;
