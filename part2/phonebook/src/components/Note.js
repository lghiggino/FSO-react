const Note = ({ note, toggleImportance }) => {

    const label = note.important ? "make not important" : "make important"
    return (
        <li className="noteLi">
            <span>{note.content}</span>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note