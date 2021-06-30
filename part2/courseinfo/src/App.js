import React, { useState } from 'react'
import './App.css';



// **************COURSE CONTENT
//import Course from "./components/Course"
//
// const App = () => {
//   const courses = [
//     {
//       id: 1,
//       name: 'Half Stack application development',
//       parts: [
//         { name: 'Fundamentals of React', exercises: 10, id: 1 },
//         { name: 'Using props to pass data', exercises: 7, id: 2 },
//         { name: 'State of a component', exercises: 14, id: 3 },
//         { name: 'Redux', exercises: 11, id: 4 },
//       ]
//     },
//     {
//       id: 2,
//       name: 'Node.js',
//       parts: [
//         { name: 'Routing', exercises: 3, id: 1 },
//         { name: 'Middlewares', exercises: 7, id: 2 },
//       ]
//     },
//     {
//       id: 3,
//       name: 'Typescript',
//       parts: [
//         { name: 'What is it', exercises: 3, id: 1 },
//         { name: 'How to type your things', exercises: 12, id: 2 },
//       ]
//     }
//   ]

//   return (
//     <div>
//       {courses.map(course => (
//         <Course key={course.id} course={course} />
//       ))}
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

// const Button = ({ handleClick, text }) => {
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

// const Display = ({ value }) => {
//   return (
//     <div>
//       {value}
//     </div>
//   )
// }


// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <button onClick={() => { setToValue(1000) }}>thousand</button>
//       <button onClick={() => { setToValue(0) }}>reset</button>
//       <button onClick={() => { setToValue(value + 1) }}>add 1</button>
//       <Button handleClick={() => { setToValue(Math.ceil(Math.random() * 10)) }} text="D10" />
//       <Button handleClick={() => { setToValue(Math.ceil(Math.random() * 20)) }} text="D20" />
//     </div>
//   )
// }

// ****************NOTES - PART2 **************/

import Note from './components/Note';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState()

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.2,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = event => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <section className="App">
      <h1>Notes</h1>
      <div>
        <button onClick={() => {setShowAll(!showAll)}}>
          show {showAll ? 'only important notes' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
        value={newNote}
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </section>
  )
}

export default App
