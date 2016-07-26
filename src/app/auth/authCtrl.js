angular.module('inventoryApp')
  .controller('authCtrl', ['$scope', '$location', 'mainSvc', 'close', 'key', function ($scope, $location, mainSvc, close, key) {

    $scope.close = close;
    $scope.key = key;
    $scope.login = function (user) {
      user.email = null;
      user.password = null;
      $scope.close(key);
    };

  }]);

// can pass the user object into the close function, or I can run it in the authCtrl
// every modal gets passed in a function called close
