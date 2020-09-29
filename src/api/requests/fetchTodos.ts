import request from '@root/api/requests/base';
import { ITodo } from '@root/typings';

export const fetchTodos = async (): Promise<ITodo[]> => {
  const todos = await request.get('/todos');
  return todos.data.slice(0, 10);
};
