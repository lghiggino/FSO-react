export default function FilteredNames({filterError, filteredPersonsArray}) {
    return (
        <>
            <h2>Filtered</h2>
            {filterError &&
                <div>
                    <p>Error: There was no match for the search query</p>
                </div>
            }
            {filteredPersonsArray.map(person => (
                <div key={person.id}>
                <span> {person.name}:  </span>
                <span> {person.phone}</span>
                </div>
            ))}
        </>
    )
}