import React from 'react';
import './ComputerGuess.css';

export default function ComputerGuess({ compGuess, result, compScore, win }) {


  const visibility = win === 'computer' ? { visibility: 'visible' } : { visibility: 'hidden' };



  return (
    <div id='computer-guess'>
      <div className='computer-score'>
        <h3>Computer</h3>
        <p>Score: <strong>{compScore}</strong></p>
      </div>
      <div>
        <p>{result ? compGuess : '?'}</p>
      </div>
      <div style={visibility}>
        <p className='computer-win' >computer win!</p>
      </div>
    </div>
  )
}
