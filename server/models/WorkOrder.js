var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;

var WorkOrderSchema = new mongoose.Schema( {

  customerId: {
    type: mongoose.Schema.Types.ObjectId, ref:'CustomerCollection'
  },
  date: {
    type: Date,
    default: new Date()
  },
  time: {
    type: String,
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  reason: {
    type: String,
  },
  notes: {
    type: String,
  }
} );

module.exports = mongoose.model( 'WorkOrderCollection', WorkOrderSchema );
