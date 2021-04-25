import React from 'react'

const Course = ({ course }) => {
  console.log(course)
  let totalExercises = course.parts.reduce( (acc, curr) => {
    // console.log("what is happening?")
    // console.log("acc", acc)
    // console.log("curr", curr, "exercises", curr.exercises)
    return acc + curr.exercises
  }, 0)
  return(
    <div>
      {course.parts.map( crs => (
        <section key={crs.id}>
          <span>{crs.name} </span>
          <span>{crs.exercises}</span>
        </section>
      ))}
      <div>total of: {totalExercises} exercises</div>
    </div>
  )
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <>
      <h1>{course.name}</h1>
      <Course course={course} />
    </>
  )
}

export default App