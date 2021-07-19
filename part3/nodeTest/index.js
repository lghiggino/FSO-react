const express = require("express")
let notes = require("./notes");


const app = express()
app.use(express.json())


app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>")
})

app.get("/api/notes", (request, response) => {
    response.json(notes)
})

//fetching a single resource in RestfulApis
app.get("/api/notes/:id", (request, response) => {
    const id = +request.params.id
    const note = notes.find(note => note.id === id)

    if(note){
        response.json(note)
    }else{
        response.status(404).end()
    }
})

//deleting resources
app.delete("/api/notes/:id", (request,response) => {
    const id = +request.params.id
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

//adding a new note
app.post("/api/notes", (request,response) => {
    const note = request.body
    console.log(note)
    response.json(note)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
