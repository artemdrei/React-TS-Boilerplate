import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@root/typings';

import { fetchPhotos } from '@store/actions/fetchPhotos';

const ListOfPhotos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: IState) => state.photos.items);

  useEffect(() => {
    (async () => dispatch(fetchPhotos()))();
  }, []);

  return (
    <ul>
      {photos.map(({ id, title, thumbnailUrl }) => {
        return (
          <li key={id}>
            <h2>{`Title: ${title}`}</h2>
            <img src={thumbnailUrl} alt="thumbnail" />
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfPhotos;
