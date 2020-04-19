import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { IProps } from './interface';

export const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  condition,
  redirect,
  path,
  location,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        condition ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirect,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default withRouter(PrivateRoute);
