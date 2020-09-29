import React from 'react';

import ListOfTodos from '@root/containers/Pages/Common/Lists/Todos';

import s from './styles.scss';

const Todos = () => {
  return (
    <>
      <h1 className={s.title}>List of Todos</h1>
      <ListOfTodos />
    </>
  );
};

export default Todos;
