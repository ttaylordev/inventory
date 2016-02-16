angular.module( "inventoryApp" )
  .controller( "workOrderCtrl", function ( $scope, $state, woSvc, customerSvc, mainSvc, ModalService ) {

    $scope.state = $state;
    $scope.workOrders = [];
    $scope.workOrder = {};
    $scope.selectedCustomer;

// Modal Service
$scope.openConfirmationModal = function () {
  ModalService.showModal( {
      templateUrl: "./app/modals/confirmationModal/confirmationModalTmpl.html", // points to the URL of the view
      controller: "confirmationModalCtrl",

    } )
    .then( function ( modal ) {
      modal.close.then( function ( then ) { // then will equal whatever happened to close
      } );
    } );
}

    // called from customerTmpl.html to give workOrder an associated customerId.\\
    $scope.setCustIdToWorkOrder = function(){
      $scope.workOrder.customerId = $scope.selectedCustomer._id;
      console.log($scope.workOrder.customerId);
      console.log($scope.selectedCustomer.firstName);
    }

      // CRUD Work Orders REST \\
    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then( function ( response ) {
          $scope.workOrders = response.data
          console.log($scope.workOrders);
        } );
    }
    $scope.getWorkOrders();

    $scope.createWorkOrder = function ( workOrder ) {
      woSvc.createWorkOrder( workOrder )
        .then( function ( response ) {
          $scope.openConfirmationModal();
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



    // CRUD Customers REST \\

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
          $scope.workOrder.customerId = $scope.selectedCustomer._id;
          console.log($scope.workOrder.customerId);
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
