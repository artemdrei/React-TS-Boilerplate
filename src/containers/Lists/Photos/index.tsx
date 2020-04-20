import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@root/typings';

import { fetchPhotos } from '@store/actions/fetchPhotos';

import s from './styles.scss';

const ListOfPhotos = () => {
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
              <span>Title: </span>
              {title}
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfPhotos;
