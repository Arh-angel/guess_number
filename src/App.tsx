import React from 'react';
import style from './App.module.scss';
import Lock from './components/common/pages/Lock';

const App = () => {
  console.log('test');
  return (
    <div className={style.app}>
      <Lock enteredNumbers="5235" comparisonResult="2554" />
    </div>
  );
}

export default App;
