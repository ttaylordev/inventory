// require model
var WorkOrder = require( './../models/WorkOrder' );

// Exports
module.exports = {
  create: function ( req, res ) {
    WorkOrder.create( req.body, function ( err, message ) {
      if ( err ) {
        res.status( 500 )
          .send( err );
      }
      res.status( 200 )
        .send( message );
    } );
  },

  read: function ( req, res ) {
    WorkOrder.find( req.query, function ( err, message ) {
      if ( err ) {
        res.status( 500 )
          .send( err );
      }
      res.status( 200 )
        .send( message );
    } );
  },

  update: function ( req, res ) {
    WorkOrder.findByIdAndUpdate( req.params.id, req.body, function ( err, message ) {
      if ( err ) {
        res.status( 500 )
          .send( err );
      }
      res.status( 200 )
        .send( message );
    } );

  },
  delete: function ( req, res ) {
    WorkOrder.findByIdAndRemove( req.params.id, function ( err, message ) {
      if ( err ) {
        res.status( 500 )
          .send( err );
      }
      res.status( 200 )
        .send( message );
    } );
  }
}
