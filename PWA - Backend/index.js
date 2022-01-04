var express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config/config')
var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: "*"
};


mongoose.connect(config.db);

const hostname = '127.0.0.1';
const port = 3333;

let router = require('./router');
const { start } = require('repl');
var app = express();
const server = http.Server(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});


app.use(cors(corsOptions));
app.use(router.initialize());






