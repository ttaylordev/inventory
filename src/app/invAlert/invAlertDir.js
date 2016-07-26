angular.module('inventoryApp')
  .directive('invAlertDir', function () {
    return {
      templateUrl: './app/invAlert/invAlert.html',
      controller: 'invAlertCtrl',
      restrict: 'E'
    };

  });
