import './App.css';
import YourGuess from './component/YourGuess';
import TargetNumber from './component/TargetNumber';
import ComputerGuess from './component/ComputerGuess';
import FootNote from './component/FootNote';
import NextRound from './component/NextRound';
import { useEffect, useState } from 'react';
import useStateRef from 'react-usestateref';




function App() {
  const [targetNum, setTargetNum] = useState(0);
  const [compGuess, setCompGuess] = useState(0);
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState(false);
  const [compScore, setCompScore] = useState(0);
  const [yourScore, setYourScore] = useState(0);
  const [compDiff, setCompDiff] = useState(0);
  const [humanDiff, setHumanDiff] = useState(0);
  const [round, setRound] = useState(1);
  const [guessBtnEnable, setGuessBtnEnable] = useState(false);
  const [nextBtnEnable, setNextBtnEnable] = useState(true);

  const [win, setWin] = useState('');

  // const makeGuessBtn = () => {

  // }



  useEffect(() => {
    setCompDiff(Math.abs(targetNum - compGuess));
  }, [targetNum]);


  useEffect(() => {
    setHumanDiff(Math.abs(targetNum - guess));
  }, [compGuess])


  useEffect(() => {
    if (compDiff !== 0 && humanDiff !== 0) {
      setWin(() => {
        return compDiff >= humanDiff ? 'human' : 'computer';
      })
    }

  }, [humanDiff]);

  useEffect(() => {
    setCompScore((preScore) => {
      if (win === 'computer') {
        return preScore + 1;
      } else {
        return preScore;
      }
    })

    setYourScore((preScore) => {
      if (win === 'human') {
        return preScore + 1;
      } else {
        return preScore;
      }
    })

  }, [win, round])


  const nextRound = () => {
    setWin('')
    setResult(prevResult => false);
    setRound((preRound) => {
      return preRound + 1;
    })
    setGuessBtnEnable(false);
  }

  const upDateGuess = (humanGuess) => {

    console.log(humanGuess);
    const newTargetNum = Math.floor((Math.random() * 10) + 1);
    const newCompGuess = Math.floor((Math.random() * 10) + 1);

    setGuess(humanGuess);
    setGuessBtnEnable(true);
    setNextBtnEnable(false);

    setTargetNum(() => {
      return newTargetNum;
    });
    console.log(targetNum);

    setCompGuess(() => {
      return newCompGuess;
    });
    console.log(compGuess);

    setResult(true)
  }


  return (

    <div className="App">
      <h1>Number Guesser!</h1>
      <div className='grid'>
        <div className='app-target-number'><TargetNumber round={round} targetNum={targetNum} result={result} /></div>
        <div className='app-your-guess'><YourGuess guessBtnEnable={guessBtnEnable} upDateGuess={upDateGuess} yourScore={yourScore} win={win} /></div>
        <div className='app-computer-guess'><ComputerGuess compGuess={compGuess} result={result} compScore={compScore} win={win} /></div>
        <div className='app-next-round'><NextRound nextBtnEnable={nextBtnEnable} onclick={nextRound} /></div>
        <div className='app-foot-note'><FootNote /></div>
      </div>
    </div>
  );
}

export default App;
