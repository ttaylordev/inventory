angular.module( "inventoryApp" )
  .controller( "headerCtrl", function ( $scope, $state ) {
    $scope.state = $state;
    $scope.test = "this is a test";
  } );
// can get id's with stateParams,

// any parameter I can get form the URL, I can use stateParams.
