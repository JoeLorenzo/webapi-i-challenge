// this imports express dependency 
const express = require("express")

// this creates the express server
const server = express()

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"

server.get("/", (req, res) => {
    // res.send("Hello World")
    res.send('Hello World')

})

const port = 8080

server.listen(port, () => {
    console.log(`API running on port ${port}`)
})
