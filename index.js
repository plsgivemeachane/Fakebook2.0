const express = require("express")
const FormData = require('form-data');
const multer = require('multer');
const app = express()

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })

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

app.post('/upload', upload.single('myImage'), (req, res, next) => {
    const file = req.file
    console.log(file)
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.get("/account", (req, res) => {
    res.sendFile(__dirname + "/account.html")
})

app.listen(3000, () => {
    console.log("Apps is up and running")
})