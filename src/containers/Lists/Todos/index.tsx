import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@root/typings';

import { fetchTodos } from '@store/actions/fetchTodos';

const ListOfTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos.items);

  useEffect(() => {
    (async () => dispatch(fetchTodos()))();
  }, []);

  return (
    <ul>
      {todos.map(({ id, title, completed }) => {
        console.log('completed:', completed);
        return (
          <li key={id}>
            <h2>{`Title: ${title}`}</h2>
            <div>{`Completed: ${completed}`}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfTodos;
