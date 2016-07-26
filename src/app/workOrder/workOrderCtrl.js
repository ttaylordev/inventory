angular.module('inventoryApp')
  .controller('workOrderCtrl', ['$scope', '$state', 'woSvc', 'customerSvc', 'mainSvc', 'ModalService', function ($scope, $state, woSvc, customerSvc, mainSvc, ModalService) {

    $scope.state = $state;
    $scope.workOrders = [];
    $scope.workOrder = {};
    $scope.selectedCustomer = null;
    // Modal Service		
    $scope.openConfirmationModal = function () {
      ModalService.showModal({
          templateUrl: './app/confirmationModal/confirmationModalTmpl.html', // points to the URL of the view		
          controller: 'confirmationModalCtrl',
        })
        .then(function (modal) {
          modal.close.then(function (then) {
            // then will equal whatever happened to close		
          });
        });
    };

    // called from customerTmpl.html to give workOrder an associated customerId.\\		
    $scope.setCustIdToWorkOrder = function () {
      $scope.workOrder.customerId = $scope.selectedCustomer._id;
      console.log($scope.workOrder.customerId);
      console.log($scope.selectedCustomer.firstName);
    };


    // CRUD Work Orders REST \\		
    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then(function (response) {
          $scope.workOrders = response.data;
          console.log($scope.workOrders);
        });
    };

    $scope.getWorkOrders();

    $scope.createWorkOrder = function (workOrder) {
      woSvc.createWorkOrder(workOrder)
        .then(function (response) {
          $scope.openConfirmationModal();
        });
    };

    $scope.updateWorkOrder = function (id, updatedWorkOrder) {
      $scope.getWorkOrders(id, updatedWorkOrder)
        .then(function (response) {
          $scope.getWorkOrders();
        });
    };

    $scope.deleteWorkOrder = function (id) {
      woSvc.deleteWorkOrder(id)
        .then(function (response) {
          $scope.getWorkOrders();
        });
    };
  }]);
