import React, { useState } from 'react';
import './App.css';

import AllNames from "./components/AllNames"
import FilteredNames from './components/FilteredNames';
import FilterForm from "./components/FilterForm";
import AddPersonForm from './components/AddPersonForm';

// function App() {
//   const [persons, setPersons] = useState([
//     { id: 0, name: "Arto Hellas", phone: "(21) 9 9999 0222" },
//     { id: 1, name: "Ada Lovelace", phone: "39-445323523" },
//     { id: 2, name: "Dan Abramov", phone: "12-43-234345" }
//   ])
//   const [newName, setNewName] = useState("")
//   const [nameError, setNameError] = useState(false)
//   const [wrongName, setWrongName] = useState("")
//   const [newPhone, setNewPhone] = useState("")
//   const [searchName, setSearchName] = useState("")
//   const [filteredPersonsArray, setFilteredPersonsArray] = useState([])
//   const [filterError, setFilterError] = useState(false)
//   const [showAll, setShowAll] = useState(true)

//   return (
//     <div className="App">
//       <h2>Phonebook</h2>

//       <AddPersonForm
//         persons={persons}
//         newName={newName}
//         nameError={nameError}
//         wrongName={wrongName}
//         newPhone={newPhone}
//         setPersons={setPersons}
//         setNewName={setNewName}
//         setNameError={setNameError}
//         setWrongName={setWrongName}
//         setNewPhone={setNewPhone}
//       />

//       <FilterForm
//         persons={persons}
//         filteredPersonsArray={filteredPersonsArray}
//         searchName={searchName}
//         filterError={filterError}
//         showAll={showAll}
//         setSearchName={setSearchName}
//         setFilteredPersonsArray={setFilteredPersonsArray}
//         setFilterError={setFilterError}
//         setShowAll={setShowAll}
//       />

//       <AllNames persons={persons} nameError={nameError} wrongName={wrongName} />

//       <FilteredNames filteredPersonsArray={filteredPersonsArray} filterError={filterError} />



//     </div>
//   );
// }


/* NOTES */

import Note from './components/Note';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log("save note button was clicked", event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.3,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div className="App">
      <h1>Notes</h1>
      <div>
        <button onClick={ () => {setShowAll(!showAll)} }>
          show {showAll? "important" : "all"}
        </button>
      </div>
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} placeholder={"A new note..."} />
          <button type="submit">save note</button>
        </form>

      </div>
      )
}


      export default App;
