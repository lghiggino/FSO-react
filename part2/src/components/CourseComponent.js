import React from "react"

export default function CourseComponent( {courses} ){
    console.log(courses)
  function reduceExercises(course){
    let totalExercises = course.parts.reduce( (acc, curr) => {
        // console.log("what is happening?")
        // console.log(acc)
        // console.log(curr.exercises)
        return acc + curr.exercises
      },0)
    return totalExercises
  }
  
  return(
    <div>
      {courses.map(course => (
        <div key={course.id}>
           <h2>{course.name}</h2>
           <ul>
             {course.parts.map(part => (
               <li key={part.id}>{part.name} {part.exercises}</li>
             ))}
           </ul>
           <p>total of {reduceExercises(course)} exercises </p>
        </div>
      ))}
    </div>
  )
}