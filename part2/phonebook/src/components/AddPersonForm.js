import axios from "axios"
import personService from "../services/persons"

export default function AddPersonForm({ persons, newName, newPhone, setPersons, setNewName, setNameError, setWrongName, setNewPhone }) {

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(el => el.name === newName)) {
            let numberSubstitution = window.confirm(`${newName} is already in the phone book. Replace the old number with ${newPhone}? - CHANGE STUFF HERE`)
            console.log(numberSubstitution)
            if (numberSubstitution) {
                alert("number changed successfully")
                //   const toggleImportanceOf = (id) => {
                //     const note = notes.find(n => n.id === id)
                //     const changedNote = { ...note, important: !note.important }

                //     noteService.updateImportance(id, changedNote).then(responseNote => {
                //       setNotes(notes.map(note => note.id !== id ? note : responseNote))
                //     })
                //       .catch(error => {
                //         console.log("Failed to Update Importance", error)
                //       })
                //   }
            }
            else {
                setNameError(true)
                setWrongName(newName)
                setNewName("")
                setNewPhone("")
                return
            }

        }
        const fullPersonData = {
            "name": newName,
            "number": newPhone
        }
        personService.create(fullPersonData).then(response => {
            console.log(response.data)
            setPersons(persons.concat(response.data))
        })
        setNewName("")
        setNewPhone("")
        setNameError(false)
    }

    return (
        <>
            <form onSubmit={addPerson}>
                <label>Add a new Person:</label>
                <input value={newName} onChange={handlePersonChange} placeholder={"a new name..."} />
                <input value={newPhone} onChange={handlePhoneChange} placeholder={"add phone number"} />
                <button type="submit">add</button>
            </form>
        </>
    )
}