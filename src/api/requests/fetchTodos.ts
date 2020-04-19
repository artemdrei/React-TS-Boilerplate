import request from '@api/requests/setup';
import { ITodo } from '@root/typings';

export const fetchTodosRequest = async (): Promise<ITodo[]> => {
  try {
    const todos = await request.get('/todos');
    if (todos.data) {
      return todos.data.slice(0, 10);
    }
  } catch (e) {
    console.log('error', e);
  }
};
