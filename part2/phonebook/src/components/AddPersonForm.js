export default function AddPersonForm( {persons, newName, nameError, wrongName, newPhone, setPersons, setNewName, setNameError, setWrongName, setNewPhone}) {

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