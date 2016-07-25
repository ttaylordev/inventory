angular.module("inventoryApp")
  .service("customerSvc", ['$http', function ($http) {


    this.getCustomers = function () {
      return $http({
          method: 'GET',
          url: '/customer'
        })
        .then(function (response) {
          return response;
        });
    };

    // singular customer
    this.getCustomer = function (id) {
      return $http({
        method: 'GET',
        url: '/customer?_id=' + id
      });
    };

    this.createCustomer = function (customer) {
      return $http({
          method: 'POST',
          url: '/customer',
          data: customer
        })
        .then(function (response) {
          return response;
        });
    };

    this.editCustomer = function (id, customer) {
      return $http({
          method: 'PUT',
          url: "/customer/" + id,
          data: customer
        })
        .then(function (response) {
          return response;
        });
    };

    this.deleteCustomer = function (id) {
      return $http({
          method: 'DELETE',
          url: '/customer/' + id
        })
        .then(function (response) {
          return response;
        });
    };

  }]);
