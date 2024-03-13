import React, { useEffect, useState } from 'react';
import './TargetNumber.css';

export default function TargetNumber({ targetNum, result,round }) {
  
  const [num, setNum] = useState(targetNum)

  useEffect(() => {
    setNum(targetNum)
  }, [targetNum])


  return (
    <div id='target-number'>
      <h1>Round {round}</h1>
      <p>Target Number: {result ? <strong>{num}</strong> : '?'} </p>
    </div>
  )
}
