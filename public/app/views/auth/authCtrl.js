angular.module( 'inventoryApp' )
  .controller( 'authCtrl', function ( $scope, $location, mainSvc ) {
    console.log( 'authCtrl is logging inside' );
    $scope.testauthCtrl = 'authCtrl is working';
  } );
