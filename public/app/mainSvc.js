angular.module( 'inventoryApp' )
  .service( 'mainSvc', function () {

    var workOrderId = 0;
    var customerId = 0;
    var selectedCustomer = 0;
    this.getWorkOrderId = function(){
      return workOrderId;
    }
    this.setWorkOrderId = function(value){
      workOrderId = value;
    }

    this.getCustomerId = function(customerId){
      return customerId;
    }
    this.setCustomerId = function(value){
      customerId = value;
    }

console.log(selectedCustomer);
  } );
