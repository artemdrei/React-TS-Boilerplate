import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';

import styles from './css/typo.scss';
console.log('styles:', styles);

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <h1>TITLE</h1>
    </HashRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
