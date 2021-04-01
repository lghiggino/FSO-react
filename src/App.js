import React, {useState}from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
        <div>{counter}</div>
        <button onClick={() => {setCounter(counter + 1)}}>
            plus
        </button>
       
        <button onClick={() => {setCounter(counter - 1)}}>
            minus
        </button>

        <button onClick={() => {setCounter(counter * 2)}}>
            double
        </button>

        <button onClick={() => {setCounter(counter / 2)}}>
            half
        </button>
    </>
  )
}

export default App

//npm start