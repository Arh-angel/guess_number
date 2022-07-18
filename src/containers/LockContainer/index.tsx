import React, { useEffect, useState } from "react";
import Lock from "../../components/pages/LockPage";
import { IComparisonResult } from "../../models/IComparisonResult";

const LockContainer = () => {
  const [comparisonResult, setComparisonResult] = useState<IComparisonResult>(Object);
  const [enteredNumbers, setEnteredNumbers] = useState<string>('');
  const [progress, setProgress] = useState(false);
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    setComparisonResult({
      onPlace: 0,
      outPlace: 0
    });
    setProgress(true);
  }, [])

  useEffect(() => {
    if(progress) {
      setRandomNum(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
      setProgress(false);
    }
  }, [progress])

  const handlerEnteredNumbers = (value:string) => {
    setEnteredNumbers(value);
  }

  return (
    <Lock randomNum={randomNum} enteredNumbers={enteredNumbers} comparisonResult={comparisonResult} handlerEnteredNumbers={handlerEnteredNumbers} />
  )
}

export default LockContainer;
