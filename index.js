// Dependency
const express = require('express')
const mongoose = require('./src/config/mongoose')
const bodyParser = require('body-parser')

// Intialize port
const port = 3000

// Intialize Express
const app = express()

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const productRouter = require('./src/routes/product')(app)
const reviewRouter = require('./src/routes/review')(app)

// Home route. Currently just to make sure app is running returns hello world!.
app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log("Listening on port " + port + ".");
});
