angular.module( "inventoryApp" )
  .controller( "customerCtrl", function ( mainSvc, $scope, $state ) {
    // $scope.customerNumber = mainSvc.customer.number; TODO:
    $scope.state = $state;
  } );
// almost always, both will have a .then
// not only does it have the data that the controller asked for, but it has a status code, headers, and other things that I dont need in my controller. typically I will return response.data

// the service will handle error logging etc.
// the controller is only concerned with putting things on the scope.

// when I call the service, it has to be asynchronous, from the controller, as well as form the service to the server.

// the controller might need a way to display that the message never went through.
