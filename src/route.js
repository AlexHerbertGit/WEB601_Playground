const express = require("express")
const path = require("path")
const http = require("http")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
    res.end('Welcome to the home page')
})

app.get("/about", (req, res) => {
    res.end("Welcome to the about page")
})

app.get("/contacts", (req, res) => {
    res.end("Welcome to the contacts page")
})

app.get("/hello/:who", (req, res) => {
    res.end("Hello, " + req.params.who + ".")
})

app.get("/sendnote", (req, res) => {   
    const filePath = path.resolve(__dirname, "notes.txt")
    res.sendFile(filePath)
})

app.get("/appendnote", (req, res) => {
    const note = req.query.note
    const filePath = path.resolve(__dirname, "notes.txt")

    fs.appendFile(filePath, note + '\n',  (err) => {
        if(err) {
        console.error("Failed to append to file:", err)
        res.statusCode(500).send("Failed to append file.")
        return
        }
        res.send("Note appended successfully!")
    })
})

app.use((req, res) => {
    res.statusCode = 404
    res.end("404!")
})

http.createServer(app).listen(3000, () => {
    console.log("Server running on port 3000")
})