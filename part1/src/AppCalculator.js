import React, {useState}from 'react'

const App = () => {
  let [current, setCurrent] = useState("");
  let [previous, setPrevious] = useState("");
  let [operation, setOperation] = useState("");

    function calculate(){
      console.log(previous, current, operation)
      switch(operation){
        case("+"):
        console.log(+previous + +current);
        return (+previous + +current)
        case("-"):
        console.log(+previous - +current);
        return (+previous + +current)
        case("*"):
        console.log(+previous * +current);
        return (+previous + +current)
        case("/"):
        console.log(+previous / +current);
        return (+previous + +current)
      }
    }
  
  return (
    <>
        <section>
          <div>{current}</div>
          <div>
            <button onClick={() => {setCurrent(current += "1")}}>1</button>
            <button onClick={() => {setCurrent(current += "2")}}>2</button>
            <button onClick={() => {setCurrent(current += "3")}}>3</button>
            <button onClick={() => {setCurrent(current += "4")}}>4</button>
            <button onClick={() => {setCurrent(current += "5")}}>5</button>
            <button onClick={() => {setCurrent(current += "6")}}>6</button>
            <button onClick={() => {setCurrent(current += "7")}}>7</button>
            <button onClick={() => {setCurrent(current += "8")}}>8</button>
            <button onClick={() => {setCurrent(current += "9")}}>9</button>
            <button onClick={() => {setCurrent(current += "0")}}>0</button>
          </div>
          <div>
          
          <button onClick={() => {
            setPrevious(previous = current)
            setCurrent(current = "")
            setOperation(operation = "+")
          }}>+</button>
          <button onClick={() => {
            setPrevious(previous = current)
            setCurrent(current = "")
            setOperation(operation = "-")
          }}>-</button>
          <button onClick={() => {
            setPrevious(previous = current)
            setCurrent(current = "")
            setOperation(operation = "*")
          }}>*</button>
          <button onClick={() => {
            setPrevious(previous = current)
            setCurrent(current = "")
            setOperation(operation = "/")
          }}>/</button>

          <button onClick={calculate}>enter (console)</button>
          <div>{calculate()}</div>
          </div>
          
        </section>
    </>
  )
}

export default App

//npm start