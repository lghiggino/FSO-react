import React, { useState } from 'react';
import './App.css';

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ])
  const [newName, setNewName] = useState("a new name...")
  const [nameError, setNameError] = useState(false)

  const handlePersonChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    // console.log("some", persons.some(el => el.name === newName))
    if (persons.some(el => el.name === newName)){
      setNameError(true)
      setNewName("")
      return
    }
    setPersons(persons.concat({ "name": newName }))
    setNewName("")
    setNameError(false)
  }


  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <label>name:</label>
        <input value={newName} onChange={handlePersonChange} />
        <button type="submit">add</button>
        debug: {newName}
      </form>

      {nameError &&
        <div>
          <p>Error: Name already exists on the list</p>
        </div>
      }

      <h2>Names</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
}


/* NOTES */

// import Note from './components/Note';



// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState("a new note")

//   const addNote = (event) => {
//     event.preventDefault()
//     console.log("save note button was clicked", event.target)
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.3,
//       id: notes.length + 1
//     }
//     setNotes(notes.concat(noteObject))
//     setNewNote("")
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div className="App">
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save note</button>
//       </form>

//     </div>
//   )
// }


export default App;
