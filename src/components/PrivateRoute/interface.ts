import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IProps extends RouteComponentProps<{}> {
  component: React.ComponentType<any>;
  condition: boolean;
  redirect: string;
  path: string;
  exact?: boolean;
}
