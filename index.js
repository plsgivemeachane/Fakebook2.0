const express = require("express")

const app = express()

app.use(express.static(__dirname + "/static"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.get("/friends", (req, res) => {
    res.sendFile(__dirname + "/friends.html")
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.listen(3000, () => {
    console.log("Apps is up and running")
})