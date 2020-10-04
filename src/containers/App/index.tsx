import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Navigation from '@root/containers/Pages/Common/Navigation';
import Todos from '@root/containers/Pages/Todos';
import Photos from '@root/containers/Pages/Photos';

import s from './styles.scss';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Navigation />
      <Switch>
        <Route path="/todos" component={Todos} />
        <Route path="/photos" component={Photos} />
        <Redirect to="/todos" />
      </Switch>
    </div>
  );
};

export default App;
