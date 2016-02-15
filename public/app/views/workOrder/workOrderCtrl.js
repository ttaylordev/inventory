angular.module( "inventoryApp" )
  .controller( "workOrderCtrl", function ( $scope, $state, woSvc, customerSvc, mainSvc ) {

    $scope.state = $state;
    $scope.workOrderNumber = '000001';
    $scope.workOrders = [];
    $scope.customerId = mainSvc.getCustomerId();

    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then( function ( response ) {
          $scope.workOrders = response.data
        } );
    }
    $scope.getWorkOrders();

    $scope.createWorkOrder = function ( workOrder ) {
      workOrder.customerId = mainSvc.customerId;
      console.log(workOrder.customerId);
      woSvc.createWorkOrder( workOrder )
        .then( function ( response ) {
          $scope.getWorkOrders();
          $scope.workOrder = {};
        } )
    }

    $scope.updateWorkOrder = function ( id, updatedWorkOrder ) {
      $scope.getWorkOrders( id, updatedWorkOrder )
        .then( function ( response ) {
          $scope.getWorkOrders();
        } );
    }

    $scope.deleteWorkOrder = function ( id ) {
      woSvc.deleteWorkOrder( id )
        .then( function ( response ) {
          $scope.getWorkOrders();
        } )
    }



// #############   CUSTOMER ENDPOINTS ################# \\

      $scope.getCustomers = function () {
        console.log( 'make order customerCtrl' );
        customerSvc.getCustomers()
          .then( function ( response ) {
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
