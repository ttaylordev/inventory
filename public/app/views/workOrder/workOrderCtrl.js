angular.module( "inventoryApp" ).controller( "workOrderCtrl", function ( $scope, $state ) {
  $scope.state = $state;
  $scope.test = "this is a test";
  console.log( 'logging from within workOrderCtrl' );
} );

console.log( 'logging from outside workOrderCtrl' );
