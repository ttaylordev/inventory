angular.module( "inventoryApp" )
  .controller( "workOrderCtrl", function ( $scope, $state, woSvc ) {

    $scope.state = $state;
    $scope.workOrderNumber = '000001';
    $scope.workOrders = [];

    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then( function ( response ) {
          $scope.workOrders = response.data
        } );
    }
    $scope.getWorkOrders();

    $scope.createWorkOrder = function ( workOrder ) {
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

  } );
