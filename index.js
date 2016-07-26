/*jshint node:true*/
'use strict';
// Require
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const errorHandler = require('./server/utils/errorHandler')();
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
var app = express();

var environment = process.env.NODE_ENV;
const day = 86400000;
var pkg = require('./package.json');

//routing Variables
var port = process.env.PORT || 8082;
var mongoURI = 'mongodb://localhost:27017/inventoryapp';


//initialize dependencies
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(compress());
app.use(logger('dev'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(errorHandler.init);

switch (environment) {
    case 'stage':
        console.log('** STAGE **');
        app.use('/', express.static('./dist/stage/'));
        break;
    default:
        console.log('** DEV **');
        app.use('/', express.static(pkg.paths.client, {maxAge: day}));
        app.use('/', express.static('./'));
        break;
}

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('ping successful');
  });


// ## -- endpoints -- ## \\
const routes = require('./server/routes/routes')(app);

//mongoDB connection
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function () {
  console.log('Connected to mongo at: ', mongoURI);
});

// app listen
app.listen(port, function () {
  console.log('listening:');
  console.log('          env === ' + app.get('env') +
        '\n         port === ' + port +
        '\n    __dirname === ' + __dirname +
        '\nprocess.cwd() === ' + process.cwd());
});
