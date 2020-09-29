import React from 'react';

import ListOfPhotos from '@root/containers/Pages/Common/Lists/Photos';

import s from './styles.scss';

const Photos = () => {
  return (
    <>
      <h1 className={s.title}>List of Photos</h1>
      <ListOfPhotos />
    </>
  );
};

export default Photos;
