angular.module('inventoryApp')
  .controller('poCtrl', ['$scope', '$location', 'mainSvc', 'woSvc', 'jobSvc', function ($scope, $location, mainSvc, woSvc, jobSvc) {


    $scope.workOrdersArray = [];
    $scope.workOrders = [];
    $scope.workOrder = {};
    $scope.selectedCustomer;
    $scope.workOrderDetails = [];
    $scope.job = mainSvc.job;

    // called from customerTmpl.html to give workOrder an associated customerId.\\
    $scope.setCustIdToWorkOrder = function () {
      $scope.workOrder.customerId = $scope.selectedCustomer._id;
      console.log($scope.workOrder.customerId);
      console.log($scope.selectedCustomer.firstName);
    }

    $scope.getWorkOrderDetails = function () {
      jobSvc.getWorkOrderDetails()
        .then(function (response) {
          $scope.workOrderDetails = response.data;
          console.log($scope.workOrderDetails + ': from poCtrl');
        });
    }
    $scope.getWorkOrderDetails();

    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then(function (response) {
          $scope.workOrders = response.data;
        });
    }
    $scope.getWorkOrders();

    $scope.customerDisp = []
  }]);
