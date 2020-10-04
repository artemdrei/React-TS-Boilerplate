import React from 'react';
import { Link } from 'react-router-dom';

import labels from '@root/i18n';
import s from './styles.scss';
import BoilerIcon from '@root/assets/svg/boiler.svg';

const Navigation: React.FC = () => {
  return (
    <div className={s.nav}>
      <BoilerIcon className={s.boilerIcon} />
      <Link to={'/todos'} className={s.navItem}>
        {labels.nav.todos}
      </Link>
      <Link to={'/photos'} className={s.navItem}>
        {labels.nav.photos}
      </Link>
    </div>
  );
};

export default Navigation;
