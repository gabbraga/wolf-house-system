//========= importing modules ==========
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes/web'); //web routes
const apiRoutes = require('./server/routes/api'); //api routes
const connection = require("./server/config/db"); //mongodb connection

// creating express server
const app = express();

//========= configuration ==========

//=== get all the data from the body (POST)
// parse application/json 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// setting static files location './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
app.use(express.static('node_modules'));


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:4200']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// configure our routes
app.use('/', routes);
app.use('/api', apiRoutes);

// setting port number for running server
const port = process.env.port || 3000;

// starting express server
app.listen(port, function () {
    console.log("Server is running at : http://localhost:" + port);
});