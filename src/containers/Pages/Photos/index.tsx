import React from 'react';

import ListOfPhotos from '@root/containers/Pages/Common/Lists/Photos';

import s from './styles.scss';
import labels from '@root/i18n';

const Photos: React.FC = () => {
  return (
    <>
      <h1 className={s.title}>{labels.pages.photos.title}</h1>
      <div className={s.photo}></div>
      <ListOfPhotos />
    </>
  );
};

export default Photos;
