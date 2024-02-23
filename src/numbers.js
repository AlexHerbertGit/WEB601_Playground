const express = require("express")
const path = require("path")
const  http = require("http")

const app = express()

app.get("/random/:min/:max", (req, res) => {
    const min = parseInt(req.params.min)
    const max = parseInt(req.params.max)

    if(isNaN(min) || isNaN(max)) {
        res.statusCode(400)
        res.json({error: "Bad request"})
        return
    }
    const result = Math.round(Math.random() * (max-min) + min)
    res.json({result: result})
})

http.createServer(app).listen(3000, () => {
    console.log("Server running on port 3000")
})