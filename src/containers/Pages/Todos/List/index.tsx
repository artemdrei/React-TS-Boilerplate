import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@root/typings';

import { fetchPhotos } from '@store/actions/fetchPhotos';

import labels from '@root/i18n';
import s from './styles.scss';

const ListOfPhotos: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: IState) => state.photos.items);

  useEffect(() => {
    (async () => dispatch(fetchPhotos()))();
  }, []);

  return (
    <ul className={s.photos}>
      {photos.map(({ id, title, url }) => {
        return (
          <li key={id} className={s.photo}>
            <img src={url} alt="thumbnail" className={s.cover} />
            <h3 className={s.title}>
              <span>{labels.pages.photos.list.title} </span>
              {title}
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfPhotos;
