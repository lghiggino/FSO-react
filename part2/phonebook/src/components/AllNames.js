import PersonLi from "./PersonLi"

export default function AllNames({ persons, nameError, wrongName, setPersons }) {
    return (
        <>
            <h2>Names</h2>
            {nameError &&
                <div>
                    <p className={"error"}>Error: {wrongName} already exists on the list</p>
                </div>
            }
            <ul>
                {persons.map(person => (
                    <PersonLi key={person.id} person={person} setPersons={setPersons} />
                    // <li key={person.id} className={"personLi"}> {person.name}: {person.number} <button>remove</button> </li>
                ))}
            </ul>

        </>
    )
}