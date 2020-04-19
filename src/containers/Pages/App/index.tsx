import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '@root/components/PrivateRoute';
import Navigation from '@root/containers/Navigation';
import Todos from '@root/containers/Pages/Todos';
import Photos from '@root/containers/Pages/Photos';

const isLoggedIn = true;

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <PrivateRoute path="/todos" condition={isLoggedIn} component={Todos} redirect="/" />
        <PrivateRoute path="/photos" condition={isLoggedIn} component={Photos} redirect="/photos" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
