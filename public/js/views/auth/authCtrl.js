angular.module('thisApp')
  .controller('authCtrl', function($scope, mainSvc) { 
    console.log('authCtrl is logging inside');
    $scope.testauthCtrl = 'authCtrl is working';
});
