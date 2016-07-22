angular.module('inventoryApp')
  .controller('copyrightCtrl', ['$scope', 'copyrightSvc', function ($scope, copyrightSvc) {
    console.log('copyrightCtrl is logging inside');
    $scope.testCopyrightCtrl = 'copyrightCtrl is working';
    $scope.copyrightSvcIsLoading = copyrightSvc.testCopyrightSvc();
    $scope.getYear = copyrightSvc.yearFunc();
  }]);