import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@root/typings';

import { fetchTodos } from '@store/actions/fetchTodos';

import s from './styles.scss';

const ListOfTodos: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos.items);

  useEffect(() => {
    (async () => dispatch(fetchTodos()))();
  }, []);

  return (
    <ul className={s.todos}>
      {todos.map(({ id, title, completed }) => {
        return (
          <li key={id} className={s.todo}>
            <h3 className={s.title}>
              <span>Title: </span>
              {title}
            </h3>
            <div className={s.status}>
              <span>Completed: </span>
              {completed ? 'Yes' : 'No'}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfTodos;
