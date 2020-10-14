import { IState } from '@root/typings';
import { todosMock, todosEmptyMock } from './todos';
import { photosMock, photosEmptyMock } from './photos';

export const stateMock: IState = {
  todos: todosMock,
  photos: photosMock,
};

export const stateEmptyMock: IState = {
  todos: todosEmptyMock,
  photos: photosEmptyMock,
};

export * from './todos';
export * from './photos';
