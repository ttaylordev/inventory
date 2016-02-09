angular.module( 'thisApp' )
  .controller( 'newJobCtrl', [ '$scope', '$location', '$stateParams', function ( $scope, $location, $stateParams, ModalService ) {
    console.log( "weiner" );
    $scope.newJob = {
      firstName: "",
      lastName: "",
      address: "",
      detail: "",
    }

    $scope.closeModal = function () {
      $location.path( '/job-list' );
    }

    $scope.saveNewJob = function () {
      //submit

    }
  } ] );
