export default function allNames({ persons, nameError, wrongName  }) {
    return (
        <>
            <h2>Names</h2>
            {nameError &&
                <div>
                    <p>Error: {wrongName} already exists on the list</p>
                </div>
            }
            {persons.map(person => (
                <p key={person.name}>{person.name} {person.phone}</p>
            ))}
            
        </>
    )
}