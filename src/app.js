const express = require("express") //Use express.js module
const http = require("http")

const app = express() //Create express.js application

app.use((req, res, next) => { //Request, Response, and Next functions
    const minute = new Date().getMinutes() //Create a const that holds the current time minutes.
    if(minute % 2 === 0) { // If the current minutes remainder of 2 = 0 
        next() //Continue to the next function
    } else {
        res.statusCode = 403 // Providing the error code (forbidden)
        res.end("Not authorized!") // End the response providing a message.
    }

})

app.use((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"}) // Create a call back handler request, status code 200 and the content type plain text.
    res.end("Hello World!") //End the response with providing a message. 
})

http.createServer(app).listen(3000) // Create server for the application using port 3000 local host.


 