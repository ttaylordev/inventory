angular.module("inventoryApp")
  .controller("confirmationModalCtrl", ['$scope', 'close', function ($scope, close) {
    $scope.close = close;
}]);
