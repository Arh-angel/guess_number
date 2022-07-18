import React from "react";
import { IComparisonResult } from "../../../models/IComparisonResult";
import style from './LockPage.module.scss';

type LockPropsTypes = {
  randomNum: number
  enteredNumbers:string;
  comparisonResult: IComparisonResult,
  handlerEnteredNumbers: (value:string) => void;
}

const Lock = (props:LockPropsTypes) => {
  const { randomNum, enteredNumbers, comparisonResult, handlerEnteredNumbers } = props;

  return (
    <div className={style.container}>
      <div className={style.display}>
        <h1 className={style.enteredNumbers}>{randomNum}</h1>
      </div>
      <div className={style.inputPanel}>
        <input className={style.input} type="text" maxLength={4} onChange={(event) => handlerEnteredNumbers(event.target.value)} value={enteredNumbers} />
      </div>
      <div className={style.result}>
        <p className={style.resultText}>Найдено совпавших цифр на своих местах: {comparisonResult.onPlace}</p>
        <p className={style.resultText}>Найдено совпавших цифр не на своих местах: {comparisonResult.outPlace}</p>
      </div>
    </div>
  )
}

export default Lock;
