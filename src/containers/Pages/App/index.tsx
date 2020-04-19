import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@root/components/PrivateRoute';
import Navigation from '@root/containers/Navigation';
import Todos from '@root/containers/Pages/Todos';
import Photos from '@root/containers/Pages/Photos';

import s from './styles.scss';

const App = () => {
  const isLoggedIn = true;

  return (
    <div className={s.app}>
      <div className={s.container}>
        <Navigation />
        <Switch>
          <PrivateRoute path="/todos" condition={isLoggedIn} component={Todos} redirect="/" />
          <PrivateRoute path="/photos" condition={isLoggedIn} component={Photos} redirect="/photos" />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
