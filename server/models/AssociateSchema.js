// stick to case specifics for your models
// index, db's are fast and this is one of the main reasons why that is so.
// when we add somethign to the database, it is creating an index of that data
// nested indices in the order of pagerank
// every that starts with b
// every that starts with bi
// every that starts with bir
// every that starts with bird... etc
// speeds up searches
// the query points to whatever is behind the ? in the URL
// having many query endpoints can make your queries much faster, don't be concerned if you have nearly 100 endpoints. it's not a bad thing.
var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;
// var LocSchema = require( './locationSchema' ); example, doesn' tmean anything in this context
var UserSchema = new mongoose.Schema( { // we dont' have to build a User ID, mongoose does that for us cause' it's the bomb.com
  firstName: {
    type: String,
    lowercase: true
  },
  lastName: {
    type: String,
    lowercase: true
  },
  middleInitial: {
    type: String
  },
  address: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  city: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  state: {
    type: String,
  },
  phoneNumber: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  hireDate: {
    type: Date,
  },
  terminationDate: {
    type: Date,
  },
  wage: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  benefitLevel: {
    type: Number,
  },
  fullTime: {
    type: Boolean,
  },
  accessLevel: {
    type: Number,
  },
  birthDate: {
    type: Date,
  }

} );

// module.exports is a method of Node.js, that allows other files access to the contents of the mongoose.model created as 'User' from the UserSchema
module.exports = mongoose.model( 'User', UserSchema ); // mongoose.model is creating a Users(it pluralizes it for you, it's kind of bizarre) collection. analagous  to a SQL table.








// locationSchema: [ LocSchema ],
