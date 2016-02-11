angular.module( 'inventoryApp' )
  .controller( 'landingCtrl', function ( $scope, mainSvc ) {
    console.log( 'landingCtrl is logging inside' );
    $scope.testlandingCtrl = 'landingCtrl is working';



  } );
