export default function AllNames({ persons, nameError, wrongName }) {
    return (
        <>
            <h2>Names</h2>
            {nameError &&
                <div>
                    <p>Error: {wrongName} already exists on the list</p>
                </div>
            }
            {persons.map(person => (
                <div key={person.id}>
                    <span> {person.name}: </span>
                    <span> {person.phone}</span>
                </div>
            ))}

        </>
    )
}