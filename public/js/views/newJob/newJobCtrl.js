angular.module( 'thisApp' )
  .controller( 'newJobCtrl', [ '$scope', '$location', '$stateParams', function ( $scope, $location, $stateParams, ModalService ) {

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
