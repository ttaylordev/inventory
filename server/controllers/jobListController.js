// require model
var WorkOrder = require( './../models/WorkOrder' );
var Customer = require( './../models/Customer' );

module.exports = {
  readPop: function ( req, res ) {
    WorkOrder.find( req.query )
      .populate('customerId')
      .exec( function ( err, message ) {
        if ( err ) {
          console.log( err );
          res.status( 500 )
            .send( err );
        }
        res.status( 200 )
          .send( message );
      } );
  }


  // readPop: function ( req, res ) {
  //   WorkOrder.find( {} )
  //     .populate( {
  //       path: 'customerId',
  //       select: 'firstName'
  //     } )
  //     .populate( {
  //       path: 'Customer._id',
  //       select: 'firstName'
  //     } )
  //     .exec( function ( err, result ) {
  //       if ( err ) {
  //         res.send( err )
  //       } else {
  //         res.send( result )
  //       }
  //     } )
  // }
}


// readpop: function ( req, res ) {
//   appointmentModel.find( {} )
//     .populate( {
//       path: 'stylist',
//       select: 'firstname lastname -_id'
//     } )
//     .populate( {
//       path: 'client',
//       select: 'firstname lastname -_id'
//     } )
//     .exec( function ( err, result ) {
//       if ( err ) {
//         res.send( err )
//       } else {
//         res.send( result )
//       }
//     } )
// }



// read: function ( req, res ) {
//     Customer.find( req.query, function ( err, message ) {
//       if ( err ) {
//         res.status( 500 )
//           .send( err );
//       }
//       res.status( 200 )
//         .send( message );
//     } );
//   },
