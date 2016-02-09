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
  DateSinceLastService: {
    type: Date,
  },
  DateOfInitialService: {
    type: Date,
  },
  Email: {
    Type: Email,
  },

} );

// module.exports is a method of Node.js, that allows other files access to the contents of the mongoose.model created as 'User' from the UserSchema
module.exports = mongoose.model( 'User', UserSchema ); // mongoose.model is creating a Users(it pluralizes it for you, it's kind of bizarre) collection. analagous  to a SQL table.








// locationSchema: [ LocSchema ],
