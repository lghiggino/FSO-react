import React, { useState } from 'react'


// **************COURSE CONTENT
// const Header = ({course}) => {
//   return(
//     <h1>{course}</h1>
//   )
// }

// const Content = ({parts}) => {
//   return(
//     <>
//       {parts.map(el => <p>{el.name}:  {el.exercises}</p>)}
//     </>
//   )
// }

// const Total = ({parts}) => {
//   return (
//     <>
//     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     <p>Number of exercises {parts.reduce((acc, curr) => (console.log("acc", acc.exercises, curr.exercises), 0))}</p>
//     <p>{[1,2,3].reduce((acc,curr) => (acc + curr), 0)}</p>
//     </>
//   )
// }


// const App = () => {
//   const course = 'Half Stack application development'

//     const parts = [
//     { name: 'Fundamentals of React', exercises: 10},
//     { name: 'Using props to pass data', exercises: 7},
//     { name: 'State of a component', exercises: 14 }
//   ]

//   return (
//     <div>
//       <Header course={course}/>
//       <Content parts = {parts}/>
//       <Total parts={parts}/>
//     </div>
//   )
// }
// ************END OF COURSE CONTENT

//BORN YEAR
// const bornYear = (props) => {
//   console.log(props)
//   const yearNow = new Date().getFullYear()
//   return yearNow - props.age
// }


// const Hello = (props) => {

//   return (
//     <div>
//       <p> Hello {props.name}, you are {props.age}</p>
//       <p> So you were probably born on {bornYear(props)}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = "Peter"
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Leonardo" age="40" />
//       <Hello name="Joan" age="22" />
//       <Hello name={name} age={age}/>
//     </div>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const [value, setValue] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1), 1000
//   )

//   const handleClick = () => {
//     setValue(Math.floor(Math.random() * 100))
//   }

//   return (
//     <div>
//       <p>hello {counter}</p>
//       <button onClick={handleClick}>
//         click me to generate a random number
//       </button>
//       <p>{value}</p>
//     </div>
//   )
// }

// const History = ( {allClicks} ) => {
//   if (!allClicks.length){
//     return(
//       <div>
//         <p>Press the buttons to see the score</p>
//       </div>
//     )
//   }
//   else{
//     return (
//       <div>
//         <p>Button press history: {allClicks.join(", ")}</p>
//       </div>
//     )
//   }
// }

// const Button = ({handleClick, text}) => {
//   return(
//     <button onClick={handleClick}>
//     {text}
//   </button>
//   )

// }

// const App = () => {
//   const [clicks, setClicks] = useState(
//     {
//       left: 0,
//       right: 0
//     }
//   )
//   const [allClicks, setAllClicks] = useState([])

//   const handleLeftClick = () => {
//     setAllClicks(allClicks.concat("L"))
//     setClicks({...clicks, left: clicks.left + 1})
//   }

//   const handleRightClick = () => { 
//     setAllClicks(allClicks.concat("R"))
//     setClicks({...clicks, right: clicks.right + 1})
//   }


//   return (
//     <div>
//       {clicks.left}
//       <Button handleClick={handleLeftClick} text={"Left"}></Button>
//       <Button handleClick={handleRightClick} text={"Right"}></Button>
//       {clicks.right}
//       <History allClicks={allClicks}/>
//     </div>
//   )
// }

// ********** DICE ROLLER

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({ value }) => {
  return (
    <div>
      {value}
    </div>
  )
}


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <button onClick={() => { setToValue(1000) }}>thousand</button>
      <button onClick={() => { setToValue(0) }}>reset</button>
      <button onClick={() => { setToValue(value + 1) }}>add 1</button>
      <Button handleClick={() => { setToValue(Math.ceil(Math.random() * 10)) }} text="D10" />
      <Button handleClick={() => { setToValue(Math.ceil(Math.random() * 20)) }} text="D20" />
    </div>
  )
}

export default App
