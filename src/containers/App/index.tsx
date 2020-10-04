import React from 'react';

import s from './styles.scss';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <h1>Level 0</h1>
        <p>React, TS and nothing more</p>
      </div>
    </div>
  );
};

export default App;
