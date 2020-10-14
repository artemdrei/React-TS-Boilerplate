import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import { IState } from '@root/typings';
import { stateMock } from '@root/tests/mocks';

const testHistory = createMemoryHistory();

const middlewares = [thunk];
const makeStore = configureStore<IState>(middlewares);

/* eslint-disable */
export function makeTestStore(state?: Partial<IState>): MockStoreEnhanced<IState, {}> {
  const store = makeStore({ ...stateMock, ...state });
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}

export const testRender = (ui: React.ReactNode = null, store = makeTestStore(), history = testHistory) => {
  return render(
    <Provider store={store}>
      <Router history={history}>{ui}</Router>
    </Provider>
  );
};
