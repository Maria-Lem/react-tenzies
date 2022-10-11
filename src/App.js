import { useState } from 'react';
import { nanoid } from 'nanoid';
import Die from './Die'
import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDiceArray = new Array(10).fill().map((key, value) => {
      return {
        value: (Math.floor(Math.random() * 6) + 1), 
        isHeld: false,
        id: nanoid()
      }
    })

    return newDiceArray;
  }

  function handleClick() {
    setDice(allNewDice())
  }

  const dieElement = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value}
      isHeld={die.isHeld}
    />
  ))

  return (
    <div className="App">
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {dieElement}
        </div>
        <button className="btn" onClick={handleClick}>Roll</button>
      </main>
    </div>
  );
}

export default App;
