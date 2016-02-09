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
var VehicleSchema = new mongoose.Schema( {
  associateId: {
    type: ObjectId,
    userSchema.js in ,
    ref: 'User',
  },
  location: {
    type: String,
    lowercase: true
  },
  vin: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  licensePlate: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  state: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  year: {
    type: Date,
    lowercase: true,
    maxlength: 20
  },
  make: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  model: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  mileage: {
    type: Number,
  },
  lastServiceDate: {
    type: Date,
  },
  registrationDate: {
    type: Date,
  }


} );
module.exports = LocSchema;
