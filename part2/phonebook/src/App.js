import React, { useState } from 'react';
import './App.css';

import AllNames from "./components/allNames"
import FilteredNames from './components/filteredNames';

function App() {
  const [persons, setPersons] = useState([
    { id: 0, name: "Arto Hellas", phone: "(21) 9 9999 0222" },
    { id: 1, name: "Ada Lovelace", phone: "39-445323523" },
    { id: 2, name: "Dan Abramov", phone: "12-43-234345" }
  ])
  const [newName, setNewName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [wrongName, setWrongName] = useState("")
  const [newPhone, setNewPhone] = useState("")

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    // console.log("some", persons.some(el => el.name === newName))
    if (persons.some(el => el.name === newName)) {
      setNameError(true)
      setWrongName(newName)
      setNewName("")
      setNewPhone("")
      return
    }
    const fullPersonData = {
      "id": persons.length,
      "name": newName,
      "phone": newPhone
    }
    setPersons(persons.concat(fullPersonData))
    setNewName("")
    setNewPhone("")
    setNameError(false)
  }

  const [searchName, setSearchName] = useState("")
  const [filteredPersonsArray, setFilteredPersonsArray] = useState([])
  const [filterError, setFilterError] = useState(false)
  const [showAll, setShowAll] = useState(true)

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }

  const filterPerson = (event) => {
    event.preventDefault()
    console.log(searchName)
    const filteredArray = persons.filter(el => el.name.toLowerCase() === searchName.toLowerCase())
    if (filteredArray.length > 0) {
      setFilteredPersonsArray(filteredArray)
      setShowAll(false)
      setFilterError(false)
    } else {
      setFilterError(true)
      setShowAll(true)
    }
    setSearchName("")
  }

  const namesToShow = showAll ? persons : persons.filter(el => el.name.toLowerCase() === searchName.toLowerCase())

  return (
    <div className="App">
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <label>Add a new Person:</label>
        <input value={newName} onChange={handlePersonChange} placeholder={"a new name..."} />
        <input value={newPhone} onChange={handlePhoneChange} placeholder={"add phone number"} />
        <button type="submit">add</button>
      </form>
      
      <form onSubmit={filterPerson}>
        <label>Search person:</label>
        <input value={searchName} onChange={handleSearchNameChange} placeholder={"type a person name"} />
        <button type="submit">search</button>
      </form>

      

      <AllNames persons={persons} nameError={nameError} wrongName={wrongName} />

      <FilteredNames filteredPersonsArray={filteredPersonsArray} filterError={filterError}/>
      
      

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
