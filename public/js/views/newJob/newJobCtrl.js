angular.module( 'thisApp' )
  .controller( 'newJobCtrl', [ '$scope', '$location', '$stateParams', function ( $scope, $location, $stateParams ) {
    console.log( 'newJobCtrl is logging' );
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
