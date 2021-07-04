export default function filteredNames({filterError, filteredPersonsArray}) {
    return (
        <>
            <h2>Filtered</h2>
            {filterError &&
                <div>
                    <p>Error: There was no match for the search query</p>
                </div>
            }
            {filteredPersonsArray.map(person => (
                <p key={person.name}>{person.name} {person.phone}</p>
            ))}
        </>
    )
}