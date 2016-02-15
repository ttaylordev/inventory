angular.module( "inventoryApp" )
  .controller( "customerCtrl", function ( customerSvc, $scope, $state ) {

      $scope.customerNumber = '001-000001-01'; // generate co number on backend, get from service.
      $scope.state = $state;
      $scope.workOrderNumber = '000001'; //generate wo number on backend, get from service.
      // send new customer to backend through service
      $scope.customers = [];
      // these methods, we can call on the scope, but they are able to call the functions on the customerSvc,


      $scope.getCustomers = function () {
        console.log( 'make order customerCtrl' );
        customerSvc.getCustomers()
          .then( function ( response ) {
            console.log( 'Customer recieves food ', response.data );
            $scope.customers = response.data
          } ); //invoke that homie
      }
      $scope.getCustomers();

      $scope.createCustomer = function ( customer ) {
        customerSvc.createCustomer( customer )
          .then( function ( response ) {
            $scope.getCustomers();
          } )
      }

      $scope.updateCustomer = function ( id, updatedCustomer ) {// just check to see what our service needs to have passed to it, this will help determine our arguments that we pass into our function.
      $scope.getCustomers( id, updatedCustomer )
        .then( function ( response ) {
          $scope.getCustomers();
        } );
    }

    $scope.deleteCustomer = function ( id ) {
      customerSvc.deleteCustomer( id )
        .then( function ( response ) {
          $scope.getCustomers();
        } )
    }

  } );


// almost always, both will have a .then
// not only does it have the data that the controller asked for, but it has a status code, headers, and other things that I dont need in my controller. typically I will return response.data

// the service will handle error logging etc.
// the controller is only concerned with putting things on the scope.

// when I call the service, it has to be asynchronous, from the controller, as well as form the service to the server.

// the controller might need a way to display that the customer never went through.
