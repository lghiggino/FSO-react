import React, {useState} from 'react'
import styles from "./App.css"

const Display = ({ counter }) => <div>{counter}</div>

const Button = ( {handleClick, id, text}) => {
    return (
        <button onClick={handleClick} id={id}>
            {text}
        </button>
    )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [dice, setDice] = useState(0);

  setTimeout(
      () => setTimer(timer + 1), 1000
  ) 

  const changeCounterValue = (e) => {
      switch(e.target.firstChild.data){
          case ("plus"):
          setCounter(counter + 1)
          break;
          case ("minus"):
          setCounter(counter - 1)
          break;
          case ("double"):
          setCounter(counter * 2)
          break;
          case ("half"):
          setCounter(counter / 2)
          break;
          case ("reset"):
          setCounter(0)
          break;
      }
  }

// antes cada botão tinha sua função única, condensada no switch do changeCOunterValue
//   const increaseOne = () => {setCounter(counter + 1)}
//   const decreaseOne = () => {setCounter(counter - 1)}
//   const doubleValue = () => {setCounter(counter * 2)}
//   const halfValue  = () => {setCounter(counter / 2)}
//   const resetValue = () => {setCounter(0)}

const rollDice = (e) => {
    let diceMAX = Number(e.target.id.slice(1))
    setDice(Math.ceil(Math.random()*diceMAX))
}

  return (
    <>
        <section>
            <h2>counter</h2>
            <Display counter = {counter}/>
            <Button handleClick ={changeCounterValue} text="plus" />
            <Button handleClick ={changeCounterValue} text="minus" />
            <Button handleClick ={changeCounterValue} text="double" />
            <Button handleClick ={changeCounterValue} text="half" />
            <Button handleClick ={changeCounterValue} text="reset" />
        </section>

        <section>
            <h2>timer</h2>
            <div>{timer}</div>
        </section>

        <section>
            <h2>diceRoll</h2>
            <div>{dice}</div>
            <Button id="d4" handleClick={rollDice} text="d4"></Button>
            <Button id="d6" handleClick={rollDice} text="d6"></Button>
            <Button id="d8" handleClick={rollDice} text="d8"></Button>
            <Button id="d10" handleClick={rollDice} text="d10"></Button>
            <Button id="d12" handleClick={rollDice} text="d12"></Button>
            <Button id="d20" handleClick={rollDice} text="d20"></Button>
            {/* Função original aqui apenas para ilustrar/relembrar */}
            <button id="d100" onClick={() => { setDice(Math.ceil(Math.random()*100))}}>
                d100
            </button>
        </section>
    </>
  )
}

export default App
