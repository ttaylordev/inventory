var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId; // mongoose has a schema,  a Type, and an ObjectId.   It's a constructor function/method
// just like we have a type string, we have a type ObjectID, but it's not a JS primitive, so we've got to declare the damn thing.-Brack Carmony
// showing a list of allthe items that may go in teh purchase order, they all came with object, ID's, when we're creating this we'll create those object Id's with it, The user might never see the object id's unless we have them in a route parameter.

// how do I create unique keys for
// every time I put something into a collection I get an "_id"
// __v in mongo or mongoose, and It might have to do withpriority
// the double underscore thingy is like JQ's $, it lets the reader know that it is a mongo thing, they are trying to namescape it away so it's less likely to interfere with what someone wants.

// Schemas are specific to mongoose
// they are not native to mongo

var POSchema = new mongoose.Schema( {
  associateId: { // do camelCase for ID unless it is coming from a Constant, an environmental variable, or from a config file.
    type: ObjectId, // a reference to my user's ID's makes a reference to a collection.  // I dont' even need to inject userSchema.js in, because mongoose is the bomb.com
    ref: 'User', //name of the model that it's using.
  },
  inventoryDeployed: [ {
    type: ObjectId,
    ref: 'Product', // I'll have a collection of Products and it will contain a bunch of pointers to individual products.
    // the whole ID is a pointer that will point to an individual product in the products collections
  } ],
  vehicleDeployed: {
    type: ObjectId,
    ref: 'Vehicle',
  },
  customerId: {
    type: ObjectId,
    ref: 'Customer', //Capital Capital Capital, it's a constructor
  },
  problem: {
    // TODO: change the name of this it sounds terrible
    type: String,
  },
  potentialSolution: {
    type: String,
  },
  potentialEquipment: [ {
    type: ObjectId,
    ref: 'Product',
  } ],
  date: {
    type: Date
  },

} );
module.exports = mongoose.model( 'PurchaseOrder', POSchema ); // a Node.js thing  // the model that mongoose.model(method) creates will be a constructor function named PurchaseOrder, and it will take in POSchema as an argument
// there is a model.export, but that is a seperate thing, that we're not going to worrry about right now.
// the alternative is to     "module.exports = LocSchema;"  // exports a Schema as a Schema
// someitmes I'll have reusable Schemas that will be used as nested in several other Schemas

//Capitalize Date because I'm specifying the object type, because those are all constructor functions, if I wanted to make a new date, I couldl say "var todaysDate = new Date();" /invoke it!

// The only time I will write a JSON file, writing in postman or writing a JSON file
// ` (backtick)- backticks will let us have return lines, if you hit enter within a backtick quote it will save that`
// var x = "this is a normal Strin000g";
// var y = "\"ask not what your \" -Bob Barker"; // escaping the charachter
// var y = '"ask not what your"  -Bob Barker'; // using whata&s$s  Somebody has not escaped their characters properly, so it is showing the html chracter code for apostrophe.
//
// seek first order solutions
// write down everything Brack says, so he becomes paranoid

// must use one reference within the mongoose model, use a schemaception.
