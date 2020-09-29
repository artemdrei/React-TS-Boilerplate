import React from 'react';
import { Link } from 'react-router-dom';

import s from './styles.scss';
import BoilerIcon from '@root/assets/svg/boiler.svg';

const Navigation = () => {
  return (
    <div className={s.nav}>
      <BoilerIcon className={s.boilerIcon} />
      <Link to={'/todos'} className={s.navItem}>
        Todos
      </Link>
      <Link to={'/photos'} className={s.navItem}>
        Photos
      </Link>
    </div>
  );
};

export default Navigation;
