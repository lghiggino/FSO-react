import React from 'react'

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


const bornYear = (props) => {
  console.log(props)
  const yearNow = new Date().getFullYear()
  return yearNow - props.age
}


const Hello = (props) => {
  
  return (
    <div>
      <p> Hello {props.name}, you are {props.age}</p>
      <p> So you were probably born on {bornYear(props)}</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Leonardo" age="40" />
      <Hello name="Joan" age="22" />
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App