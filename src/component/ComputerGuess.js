import React, { useEffect, useState } from 'react';
import './ComputerGuess.css';

export default function ComputerGuess({ compGuess, result, compScore, win }) {
  const [guess, setGuess] = useState(compGuess);

  const visibility = win==='computer' ? { visibility: 'visible' } : { visibility: 'hidden' };

  useEffect(() => {
    setGuess(compGuess)
  }, [compGuess])

  return (
    <div id='computer-guess'>
      <div className='computer-score'>
        <h3>Computer</h3>
        <p>Score: <strong>{compScore}</strong></p>
      </div>
      <div>
        <p>{result ? guess : '?'}</p>
      </div>
      <div style={visibility}>
        <p className='computer-win' >computer win!</p>
      </div>
    </div>
  )
}
