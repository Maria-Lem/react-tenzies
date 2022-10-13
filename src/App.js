import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './Die'
import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allTheSameValue = dice.every(die => die.value === firstValue);
    
    if (allHeld && allTheSameValue) {
      setTenzies(true);
    }
  }, [dice])

  function newDie() {
    return {
      value: (Math.floor(Math.random() * 6) + 1), 
      isHeld: false,
      id: nanoid()
    }
  };

  function allNewDice() {
    const newDiceArray = [];
    new Array(10).fill().map(() => newDiceArray.push(newDie()));  
    return newDiceArray;
  }
  
  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    })
  }

  function rollDice() {
    setDice(prevDice => {
      const allHeld = prevDice.every(die => die.isHeld);

      if (allHeld) {
        setTenzies(false);
        return allNewDice();
      } else {
        return prevDice.map(die => {
          return die.isHeld ? die : newDie();
        })

      }
    })
  }

  const dieElement = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ))

  return (
    <div className="App">
      <main className="main">
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {dieElement}
        </div>
        <button className="btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
  );
}

export default App;
