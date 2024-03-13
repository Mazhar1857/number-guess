import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import './YourGuess.css';
export default function YourGuess({ upDateGuess, yourScore, win, guessBtnEnable }) {
    const [guess, setGuess] = useState(0);


    const incrementFunc = () => {
        setGuess((preGuess) => {
            return preGuess + 1;
        })

    }
    const decreamentFunc = () => {
        setGuess((preGuess) => {
            return preGuess - 1;
        })

    }

    const handleGuessupDate = () => {
        setGuess(prevGuess => {
            upDateGuess(prevGuess);
            return prevGuess;
        });
        
    }


    return (
        <div id='your-guess'>
            <div >
                <h3>You</h3>
                <p>Score: <strong>{yourScore}</strong></p>
            </div>
            <div className='guess'>{guess}</div>
            <ToggleButton guess={guess} incrementFunc={incrementFunc} decreamentFunc={decreamentFunc} />

            <div className='guess-button'>
                <button onClick={handleGuessupDate} disabled={guessBtnEnable} >{win === 'human' ? <p style={{color:"rgba(255, 0, 0,1)",fontSize:'20px'}}>you win!</p> : 'Make a Guess'}</button>
            </div>
        </div>
    )
}
