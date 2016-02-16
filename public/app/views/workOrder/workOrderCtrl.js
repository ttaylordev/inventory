angular.module( "inventoryApp" )
  .controller( "workOrderCtrl", function ( $scope, $state, woSvc, customerSvc, mainSvc ) {

    $scope.state = $state;
    $scope.workOrderNumber = '000001';
    $scope.workOrders = [];

    console.log( $scope.customerId );
    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then( function ( response ) {
          $scope.workOrders = response.data
        } );
    }
    $scope.getWorkOrders();

    $scope.createWorkOrder = function ( workOrder ) {
      workOrder.customerId = $scope.selectedCustomer._id;
      console.log(workOrder.customerId);
      woSvc.createWorkOrder( workOrder )
        .then( function ( response ) {
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
      customerSvc.getCustomers()
        .then( function ( response ) {
          $scope.customers = response.data
        } );
    }
    $scope.getCustomers();

    $scope.createCustomer = function ( customer ) {
      customerSvc.createCustomer( customer )
        .then( function ( response ) {
          $scope.selectedCustomer = response.data;
          $scope.getCustomers();
          $scope.customer = '';
          $scope.addNewCustomer = !$scope.addNewCustomer;
        } )
    }

    $scope.updateCustomer = function ( id, updatedCustomer ) {
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
