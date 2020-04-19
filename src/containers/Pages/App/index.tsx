import React from 'react';

import ListOfTodos from '@root/containers/Lists/Todos';
import ListOfPhotos from '@root/containers/Lists/Photos';

const App = () => {
  return (
    <div>
      <ListOfTodos />
      <ListOfPhotos />
    </div>
  );
};

export default App;
