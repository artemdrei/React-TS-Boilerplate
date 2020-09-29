import { IAction, IDispatch, ITodo } from '@root/typings';
import api from '@api/requests';

type TFetchTodos = () => (dispatch: IDispatch) => void;
export interface IFetchTodos extends IAction<'FETCH_TODOS'> {
  payload: ITodo[];
}

export const fetchTodos: TFetchTodos = () => async (dispatch) => {
  try {
    const todos = await api.fetchTodos();

    const action: IFetchTodos = {
      type: 'FETCH_TODOS',
      payload: todos,
    };

    dispatch(action);
  } catch (error) {
    throw new Error(error);
  }
};
