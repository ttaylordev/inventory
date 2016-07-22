angular.module("inventoryApp")
  .controller("customerCtrl", ['customerSvc', '$scope', '$state', 'mainSvc', 'woSvc', function (customerSvc, $scope, $state, mainSvc, woSvc) {

    $scope.customerNumber = '001-000001-01';
    $scope.state = $state;
    $scope.workOrderNumber = '000001';
    $scope.customers = [];
    $scope._id;

    $scope.setSelected = function (id) {
      mainSvc.setCustomerId(id);
    }

    $scope.getCustomers = function () {
      customerSvc.getCustomers()
        .then(function (response) {
          $scope.customers = response.data
        });
    }
    $scope.getCustomers();

    $scope.createCustomer = function (customer) {
      customerSvc.createCustomer(customer)
        .then(function (response) {
          $scope._id = response.data._id
          $scope.getCustomers();
        })
    }

    $scope.updateCustomer = function (id, updatedCustomer) {
      $scope.getCustomers(id, updatedCustomer)
        .then(function (response) {
          $scope.getCustomers();
        });
    }

    $scope.deleteCustomer = function (id) {
      customerSvc.deleteCustomer(id)
        .then(function (response) {
          $scope.getCustomers();
        })
    }

  }]);


// almost always, both will have a .then
// not only does it have the data that the controller asked for, but it has a status code, headers, and other things that I dont need in my controller. typically I will return response.data

// the service will handle error logging etc.
// the controller is only concerned with putting things on the scope.

// when I call the service, it has to be asynchronous, from the controller, as well as form the service to the server.

// the controller might need a way to display that the customer never went through.
