const http = require("http");
const notes = require("./notes");


const app = http.createServer((request, response) => {
    response.writeHead(200, { "Contetn-Type": "text/plain" })
    response.end(JSON.stringify(notes))
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)