angular.module( 'inventoryApp' )
  .controller( 'newJobCtrl', [ '$scope', '$location', '$stateParams', function ( $scope, $location, $stateParams ) {

    $scope.newJob = {
      firstName: "",
      lastName: "",
      address: "",
      detail: "",
    }

    $scope.closeModal = function () {
      $location.path( '/joblist' );
    }

    $scope.saveNewJob = function () {
      //submit

    }
  } ] );
