import React, { useState } from 'react';
import './App.css';

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
    const filteredArray = persons.filter(el => el.name === searchName)
    if (filteredArray.length > 0) {
      setFilteredPersonsArray(filteredArray)
      setShowAll(false)
    } else {
      setFilterError(true)
    }
    setSearchName("")
  }

  const namesToShow = showAll ? persons : persons.filter(el => el.name === searchName)

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={filterPerson}>
        <label>enter a person name:</label>
        <input value={searchName} onChange={handleSearchNameChange} placeholder={"type a person name"} />
        <button type="submit">search</button>
      </form>

      <form onSubmit={addPerson}>
        <label>name:</label>
        <input value={newName} onChange={handlePersonChange} placeholder={"a new name..."} />
        <input value={newPhone} onChange={handlePhoneChange} placeholder={"add phone number"} />
        <button type="submit">add</button>
      </form>

      {nameError &&
        <div>
          <p>Error: {wrongName} already exists on the list</p>
        </div>
      }

      {filterError &&
        <div>
          <p>Error: There was no match for the search query</p>
        </div>
      }

      <h2>Names</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name} {person.phone}</p>
      ))}

      <h2>Filtered</h2>
      {filteredPersonsArray.map(person => (
        <p key={person.name}>{person.name} {person.phone}</p>
      ))}

      <h2>teste</h2>
      {namesToShow.map(person => (
        <p key={person.name}>{person.name} {person.phone}</p>
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
