// stick to case specifics for your models
// index, db's are fast and this is one of the main reasons why that is so.
// when we add somethign to the database, it is creating an index of that data
// nested indices in the order of pagerank
// $contains or $in
// every that starts with b
// every that starts with bi
// every that starts with bir
// every that starts with bird... etc
// speeds up searches
// the query points to whatever is behind the ? in the URL
// having many query endpoints can make your queries much faster, don't be concerned if you have nearly 100 endpoints. it's not a bad thing.
var mongoose = require( 'mongoose' ); // pulling mongoose in directly, using the module method takes two arguments, name of the collection, then the object where we define the Schema. The field types are javascript natives, which turn out to be constructor functions.
var ObjectId = mongoose.Schema.Types.ObjectId;
var LocSchema = new mongoose.Schema( {

  managerId: {
    type: String,
  },
  associateId: {
    type: ObjectId,
    ref: 'User',
  },
  name: {
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
  phoneNumber: {
    type: String,
    lowercase: true,
    maxlength: 20
  },
  acquireDate: {
    type: Date,
  }

} );

module.exports = LocSchema;
