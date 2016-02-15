var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;
// var LocSchema = require( './locationSchema' ); example, doesn' tmean anything in this context
// we dont' have to build a User ID, mongoose does that for us cause' it's the bomb.com
var CustomerSchema = new mongoose.Schema( {

  firstName: {
    type: String,
    lowercase: true
  },
  lastName: {
    type: String,
    lowercase: true
  },
  address: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  zip: {
    type: String,
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
  email: {
    Type: String,
  },
  dateOfInitialService: {
    type: Date,
  },
  dateSinceLastService: {
    type: Date,
  },
  frequencyOfService: {
    type: Date,
  },
  date: {
    type: Date,
    default: new Date()
  }


} );

module.exports = mongoose.model( 'CustomerCollection', CustomerSchema );
// mongoose.model is creating a Users(it pluralizes it for you, it's kind of bizarre) collection. analagous  to a SQL table.
// module.exports is a method of Node.js, that allows other files access to the contents of the mongoose.model created as 'User' from the UserSchema








// locationSchema: [ LocSchema ],
