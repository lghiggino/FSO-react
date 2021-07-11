const Note = ({ note, toggleImportance, updateDate, removeNote }) => {

    const label = note.important ? "make not important" : "make important"

    return (
        <li className={note.important ? "noteLiBold" : "noteLi"}>
            <span>{note.date.split("T")[0]}</span>
            <span>{note.content}</span>
            <button onClick={toggleImportance}>{label}</button>
            <button onClick={updateDate}>Update date</button>
            <button onClick={removeNote}>Remove note</button>
        </li>
    )
}

export default Note