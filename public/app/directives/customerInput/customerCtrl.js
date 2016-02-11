angular.module( "inventoryApp" )
  .controller( "customerCtrl", function ( $scope, $state ) {
    console.log( 'logging from customerCtrl' );
    $scope.customerNumber = '9988733';
    console.log( $scope.customerNumber );
    $scope.testthispieceofcrap = 'This is a friggen test';
    $scope.state = $state;
    $scope.test = "this is a test";
  } );

console.log( 'logging from customerCtrl outside' );
