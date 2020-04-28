import React from 'react';

import ListOfPhotos from '@root/containers/Lists/Photos';
import s from './styles.scss';

import ReactLogo from './Down.svg';

const Photos = () => {
  return (
    <>
      <h1 className={s.title}>List of Photos</h1>
      <ListOfPhotos />
      <ReactLogo />
    </>
  );
};

export default Photos;
