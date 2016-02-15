var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;

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
