import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';


/* PHONEBOOK */
// import AllNames from "./components/AllNames"
// import FilteredNames from './components/FilteredNames';
// import FilterForm from "./components/FilterForm";
// import AddPersonForm from './components/AddPersonForm';

// function App() {
//   const [persons, setPersons] = useState([])

//   const [newName, setNewName] = useState("")
//   const [nameError, setNameError] = useState(false)
//   const [wrongName, setWrongName] = useState("")
//   const [newPhone, setNewPhone] = useState("")
//   const [searchName, setSearchName] = useState("")
//   const [filteredPersonsArray, setFilteredPersonsArray] = useState([])
//   const [filterError, setFilterError] = useState(false)
//   const [showAll, setShowAll] = useState(true)

//   useEffect(() => {
//     axios.get("http://localhost:3001/persons").then(response => {
//       setPersons(response.data)
//     })
//   }, [])

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
import noteService from "./services/notes"

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    loadNotes()
  }, [])

  async function loadNotes() {
    noteService.getAll().then(responseNotes => {
      setNotes(responseNotes)
    })
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.4,
      // id: notes.length + 1
    }

    noteService.create(noteObject).then(responseNote => {
      setNotes(notes.concat(responseNote))
      setNewNote("")
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.updateImportance(id, changedNote).then(responseNote => {
      setNotes(notes.map(note => note.id !== id ? note : responseNote))
    })
  }

  async function updateDateOf(id) {
    const note = notes.find(n => n.id === id)
    const newDate = new Date().toISOString()
    const changedNote = { ...note }
    changedNote.date = newDate

    noteService.updateDate(id, changedNote).then(responseNote => {
      setNotes(notes.map(note => note.id !== id ? note : responseNote))
    })

  }

  async function removeNote(id) {
    const note = notes.find(n => n.id === id)

    await noteService.remove(id, note)
    loadNotes()

  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div className="App">
      <h1>Notes</h1>
      <div>
        <button onClick={() => { setShowAll(!showAll) }}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            updateDate={() => updateDateOf(note.id)}
            removeNote={() => removeNote(note.id)}
          />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} placeholder={"A new note..."} />
        <button type="submit">save note</button>
      </form>

    </div>
  )
}


export default App;
