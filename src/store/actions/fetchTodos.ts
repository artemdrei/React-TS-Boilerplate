import { IAction, IDispatch, ITodo } from '@root/typings';
import { fetchTodosRequest } from '@api/requests';

type TFetchTodos = () => (dispatch: IDispatch) => void;
export interface IFetchTodos extends IAction<'FETCH_TODOS'> {
  payload: ITodo[];
}

export const fetchTodos: TFetchTodos = () => async (dispatch) => {
  console.log('__SHOW LOADER__');
  try {
    const todos = await fetchTodosRequest();
    console.log('todos:', todos);

    const action: IFetchTodos = {
      type: 'FETCH_TODOS',
      payload: todos,
    };

    dispatch(action);
  } catch (e) {
    console.log('fetchTodos redux action error', e);
  } finally {
    console.log('__HIDE LOADER__');
  }
};
