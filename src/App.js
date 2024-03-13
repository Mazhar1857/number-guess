import './App.css';
import YourGuess from './component/YourGuess';
import TargetNumber from './component/TargetNumber';
import ComputerGuess from './component/ComputerGuess';
import FootNote from './component/FootNote';
import NextRound from './component/NextRound';
import { useEffect, useState } from 'react';





function App() {
  const [targetNum, setTargetNum] = useState(0);
  const [compGuess, setCompGuess] = useState(0);
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState(false);
  const [compScore, setCompScore] = useState(0);
  const [yourScore, setYourScore] = useState(0);
  const [compDiff, setCompDiff] = useState(null);
  const [humanDiff, setHumanDiff] = useState(null);
  const [round, setRound] = useState(1);
  const [guessBtnEnable, setGuessBtnEnable] = useState(false);
  const [nextBtnEnable, setNextBtnEnable] = useState(true);

  const [win, setWin] = useState(false);


  useEffect(() => {
    setCompDiff(Math.abs(targetNum - compGuess));
  }, [targetNum]);


  useEffect(() => {
    setHumanDiff(Math.abs(targetNum - guess));
  }, [compDiff])


  useEffect(() => {
    setWin(() => {
      if (compDiff !== null && humanDiff !== null) {
        return compDiff >= humanDiff ? 'human' : 'computer';
      }
    })

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
    setWin(null)
    setResult(prevResult => false);
    setRound((preRound) => {
      return preRound + 1;
    })
    setGuessBtnEnable(false);
    setNextBtnEnable(true);
  }

  const upDateGuess = (humanGuess) => {


    const newTargetNum = Math.floor((Math.random() * 10) + 1);
    const newCompGuess = Math.floor((Math.random() * 10) + 1);

    setGuess(humanGuess);
    setGuessBtnEnable(true);
    setNextBtnEnable(false);

    setTargetNum(() => {
      return newTargetNum;
    });


    setCompGuess(() => {
      return newCompGuess;
    });


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
