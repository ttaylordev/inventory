var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;

var WorkOrderSchema = new mongoose.Schema( {

  customerId: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date()
  },
  reason: {
    type: String,
  },
  notes: {
    type: String,
  }
} );

module.exports = mongoose.model( 'WorkOrderCollection', WorkOrderSchema );
