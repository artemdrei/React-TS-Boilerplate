import { IAction, IDispatch, ITodo } from '@root/types';

type TFetchTodos = () => (dispatch: IDispatch) => void;
export interface IFetchTodos extends IAction<'FETCH_TODOS'> {
  payload: ITodo[];
}

export const fetchFolders: TFetchTodos = () => async (dispatch) => {
  console.log('SHOW LOADER');
  try {
    const todos = [
      { title: 'One', isChecked: true },
      { title: 'Two', isChecked: false },
    ];

    const action: IFetchTodos = {
      type: 'FETCH_TODOS',
      payload: todos,
    };

    dispatch(action);
  } catch (e) {
    console.log('fetchFolders redux action error', e);
  } finally {
    console.log('HIDE LOADER');
  }
};
