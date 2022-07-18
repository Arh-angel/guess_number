import React from "react";
import style from './Lock.module.scss';

type LockPropsTypes = {
  enteredNumbers:string;
  comparisonResult: string
}

const Lock = (props:LockPropsTypes) => {
  const { enteredNumbers, comparisonResult } = props;

  return (
    <div className={style.container}>
      <div className={style.display}>
        <h1>{enteredNumbers}d</h1>
      </div>
      <div className={style.inputPanel}>
        <input type="text" />
      </div>
      <div className={style.result}>
        <p>{comparisonResult}</p>
      </div>
    </div>
  )
}

export default Lock;
