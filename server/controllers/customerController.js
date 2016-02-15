// require model
var Customer = require( './../models/Customer' );

// Exports
module.exports = {
  create: function ( req, res ) {
    console.log('Chef makes order');
    Customer.create( req.body, function ( err, message ) {
      if ( err ) {
        res.status( 500 ).send( err );
      }
      res.status( 200 ).send( message );
    } );
  },

  read: function ( req, res ) {
    Customer.find( req.query, function ( err, message ) {
      if ( err ) {
        res.status( 500 ).send( err );
      }
      res.status( 200 ).send( message );
    } );
  },

  update: function ( req, res ) {
    Customer.findByIdAndUpdate( req.params.id, req.body, function ( err, message ) {
      if ( err ) {
        res.status( 500 ).send( err );
      }
      res.status( 200 ).send( message );
    } );

  },
  delete: function ( req, res ) {
    Customer.findByIdAndRemove( req.params.id, function ( err, message ) {
      if ( err ) {
        res.status( 500 ).send( err );
      }
      res.status( 200 ).send( message );
    } );
  }
}
