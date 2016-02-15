angular.module( 'inventoryApp' )
  .controller( 'newJobCtrl', [ '$scope', '$location', function ( $scope, $location) {

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
