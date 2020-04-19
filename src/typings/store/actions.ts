import { Action, StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type reduxActions = 'FETCH_TODOS';

export interface IAction<T extends reduxActions = reduxActions> extends Action<T> {}

export interface IDispatch extends ThunkDispatch<{}, {}, IAction> {}

export type TStoreEnhancer = StoreEnhancer<{ dispatch: IDispatch }, {}>;
