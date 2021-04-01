import React, {useState}from 'react'
import styles from "./App.css"

function Display(props){
    return (
        <div>{props.counter}</div>
    )
}

function Button(props){
    return (
        <button onClick={props.handleClick}>
            {props.text}
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
            <button id="d4" onClick={rollDice}>
                d4
            </button>
        
            <button id="d6" onClick={rollDice}>
                d6
            </button>

            <button id="d8" onClick={rollDice}>
                d8
            </button>

            <button id="d10" onClick={rollDice}>
                d10
            </button>

            <button id="d12" onClick={rollDice}>
                d12
            </button>

            <button id="d20" onClick={rollDice}>
                d20
            </button>
            {/* Função original aqui apenas para ilustrar/relembrar */}
            <button id="d100" onClick={() => { setDice(Math.ceil(Math.random()*100))}}>
                d100
            </button>
        </section>
    </>
  )
}

export default App

//npm start