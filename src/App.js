import react from "react"

const Header = (props) => {
  return (  
    <h1>{props.course}</h1>
  )
}

const NewPart = (props)=> {
  // console.log("from newPart::",props)
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
   console.log("from content::",props)
  return (
    <>
      {console.log(props.parts.length)}
      <NewPart name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <NewPart name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <NewPart name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )  
}

const Total = (props) => {
  // console.log("from total::",props)
  return (
    <p>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamental of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      }
    ]
  }
 

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

export default App;


