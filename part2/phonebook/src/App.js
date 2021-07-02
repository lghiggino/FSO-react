import React, { useState } from 'react';
import './App.css';

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ])
  const [newName, setNewName] = useState("a new name")

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log("clicou em add", event.target)
    setPersons(persons.concat({"name": newName}))
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          <label>name:</label>
          <input value={newName} onChange={handlePersonChange}/>
          <button type="submit">add</button>
          debug: {newName}
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
}


/* NOTES */

// import Note from './components/Note';

// const addNote = (event) => {
//   event.preventDefault()
//   console.log("save note button was clicked", event.target)
// }

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)

//   return (
//     <div className="App">
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note}/>)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input />
//         <button type="submit">save note</button>
//       </form>
     
//     </div>
//   )
// }


export default App;
