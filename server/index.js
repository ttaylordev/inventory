// Require
var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

// Controllers
var customerCtrl = require( './controllers/customerController' );
var workOrderCtrl = require('./controllers/workOrderController')

//initialize app
var app = express();

//initialize dependencies
app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static( __dirname + './../public' ) );


//endpoints
// create
app.post( '/customer', customerCtrl.create );
// read
app.get( '/customer', customerCtrl.read );
// update
app.put( '/customer/:id', customerCtrl.update );
// delete
app.delete( '/customer/:id', customerCtrl.delete );

app.post( '/workOrder', workOrderCtrl.create );
app.get( '/workOrder', workOrderCtrl.read );
app.put( '/workOrder/:id', workOrderCtrl.update );
app.delete( '/workOrder/:id', workOrderCtrl.delete );




//routing Variables
var port = 3000;
var mongoURI = 'mongodb://localhost:27017/inventoryapp';

//mongoDB connection
mongoose.set( 'debug', true );
mongoose.connect( mongoURI );
mongoose.connection.once( 'open', function () {
  console.log( 'Connected to mongo at: ', mongoURI );
} )

// app listen
app.listen( port, function () {
  console.log( 'listening on port ', port );
} );
