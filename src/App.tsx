import React from 'react';
import style from './App.module.scss';
import LockContainer from './containers/LockContainer';

const App = () => {
  console.log('test');
  return (
    <div className={style.app}>
      <LockContainer />
    </div>
  );
}

export default App;
