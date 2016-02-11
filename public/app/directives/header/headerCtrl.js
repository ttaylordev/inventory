angular.module( "inventoryApp" ).controller( "headerCtrl", function ( $scope, $state ) {
  console.log( 'headerCtrl is logging' );
  $scope.state = $state;
  $scope.test = "this is a test";
  console.log( $scope.state + ' running twice' );
} );
// can get id's with stateParams,

// any parameter I can get form the URL, I can use stateParams.
