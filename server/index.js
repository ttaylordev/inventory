// Require
var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );


// Controllers
var customerCtrl = require( './controllers/customerController' ); //does not need a .js, it knows that if you are requiring it, that it should be a js file.

//initialize app
var app = express();

//initialize dependencies
app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static( __dirname + './../public' ) ); // NOTE: tells it to host this static page for us Local through Nodemon.
// jumps out of the current directory and goes into the public directory. __dirname is a javascript reserved word that means current directory within the file structure.
// static sends the app, the public folder, through the express.static method, to whoever requests it. Through the URL. It's similar to an HTTP request, that happens without us asking it to.
// the cache is loaded with the script sources from the index.html


//endpoints
// create end point
app.post( '/customer', customerCtrl.create );

// update end point
app.put( '/customer/:id', customerCtrl.update );

//delete end point
app.delete( '/customer/:id', customerCtrl.delete );
// read end point
// a get method that is being passed a URL, and a callback.
// customers URL, using the callback method, read, on the customerCtrl object.
app.get( '/customer', customerCtrl.read );
//callback is when you pass the name specifically without invoking it, and the app will use it itself.


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
