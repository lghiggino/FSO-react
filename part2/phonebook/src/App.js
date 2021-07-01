import React, { useState } from 'react';
import './App.css';

// function App() {
//   const [persons, setPersons] = useState([
//     { name: "Arto Hellas" }
//   ])
//   const [newName, setNewName] = useState("")

//   const handlePersonChange = (ev) => {
//     console.log(ev.target.value)
//   }

//   const addPerson = (ev) => {
//     ev.preventDefault()
//     console.log("clicou em add", ev.target)
//   }

//   return (
//     <div className="App">
//       <h2>Phonebook</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           <label>name:</label>
//           <input
//             // onChange={handlePersonChange}

//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//         <div>
//           debug: {newName}
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons.map(person => (
//         <p key={person.name}>{person.name}</p>
//       ))}
//     </div>
//   );

const App = (props) => {
  console.log(props)
  const [notes, setNotes] = useState(props.notes)
  console.log(notes)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <p key={note.id}>{note.text}</p>
        )}
      </ul>
    </div>
  )
}
// }

export default App;
