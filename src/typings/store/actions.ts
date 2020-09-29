import { Action, StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type reduxActions = 'FETCH_TODOS' | 'FETCH_PHOTOS';

export interface IAction<T extends reduxActions = reduxActions> extends Action<T> {}

export interface IDispatch extends ThunkDispatch<Record<string, unknown>, Record<string, unknown>, IAction> {}

export type TStoreEnhancer = StoreEnhancer<{ dispatch: IDispatch }, Record<string, unknown>>;
