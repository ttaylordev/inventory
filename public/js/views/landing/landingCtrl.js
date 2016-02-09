angular.module( 'thisApp' )
  .controller( 'landingCtrl', function( $scope, mainSvc ) {
    console.log( 'landingCtrl is logging inside' );
    $scope.testlandingCtrl = 'landingCtrl is working';



  } );