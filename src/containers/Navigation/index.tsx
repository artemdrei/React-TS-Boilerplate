import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to={'/todos'}>Go to Todos</Link>
      <Link to={'/photos'}>Go to Photos</Link>
    </div>
  );
};

export default Navigation;
