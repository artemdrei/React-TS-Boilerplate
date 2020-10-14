import React from 'react';

import ListOfTodos from '@root/containers/Pages/Photos/List';

import s from './styles.scss';
import labels from '@root/i18n';

const Todos: React.FC = () => {
  return (
    <>
      <h1 className={s.title}>{labels.pages.todos.title}</h1>
      <ListOfTodos />
    </>
  );
};

export default Todos;
