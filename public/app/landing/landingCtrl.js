angular.module('inventoryApp')
  .controller('landingCtrl', ['$scope', 'mainSvc', 'ModalService', function ($scope, mainSvc, ModalService) {

    $scope.openLoginModal = function () {
      console.log(ModalService);
      ModalService.showModal({
          templateUrl: './app/auth/authTmpl.html', // points to the URL of the view
          controller: 'authCtrl',
          inputs: {
            key: 'user'
          }
          // key gets passed into inventory app
        })
        .then(function (modal) {
          //function that runs when modal closes
          modal.close.then(function (then) { // then will equal whatever happened to close
            $scope.confirmationAnswer = then;
            console.log(then); // logs user to the console
          });
        });
    }
  }]);
