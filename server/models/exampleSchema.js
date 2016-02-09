var mongoose = require( 'mongoose' ),
  Schema = mongoose.Schema;

// models are Schemas that have their own collection
// you can define things that will be a shecma that don't have their own colection// addresses can be a schea, but I might not have a collection of just addresses in the database, they will be nested inside an actual user object.
// a Schema is the shape of the data, we're not creating a colection out of it.
// almost every schema wie are turning it into a model at our scale, it's unlikely that we'll ave any schemas that actually meet the criteria of actual models.

// the model will be what is responsible for getting and putting things into and from the DB
// they are not endpoints. endpoints are contained within index.js
// each model will likely have a full set of CRUD, I'll have a few that dont, but for the most part
// index.js serves as a router for the server, listens on the port, and says "Hey, call this controller function for that model, that holds the busoiness logic for what to do with those things, the model defines the way that those things are going to look."
// look up imposter syndrom

/**
 * Article Schema
 */
var ArticleSchema = new Schema( { // strips off extraneous junk
  /// saving things to a user colection, the fb prof ID might not match everything on my user id
  // allows clean data constraints, truncates extra nonsense


  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  tags: [ String ],
  comments: [ {
    post: String,
    posted: {
      type: Date,
      default: Date.now
    }
             } ]
} );

mongoose.model( 'Article', ArticleSchema );
