angular.module("inventoryApp")
  .service("woSvc", ['$http', function ($http) {


    this.getWorkOrders = function () {
      return $http({
          method: 'GET',
          url: '/workOrder'
        })
        .then(function (response) {
          return response;
        });
    };

    // singular workOrder
    this.getWorkOrder = function (id) {
      console.log(id);
      return $http({
        method: 'GET',
        url: '/workOrder?_id=' + id
      });
    };

    this.createWorkOrder = function (workOrder) {
      return $http({
          method: 'POST',
          url: '/workOrder',
          data: workOrder
        })
        .then(function (response) {
          return response;
        });
    };

    this.editWorkOrder = function (id, workOrder) {
      return $http({
          method: 'PUT',
          url: "/workOrder/" + id,
          data: workOrder
        })
        .then(function (response) {
          return response;
        });
    };

    this.deleteWorkOrder = function (workOrder) {
      return $http({
          method: 'DELETE',
          url: '/workOrder/' + workOrder._id
        })
        .then(function (response) {
          return response;
        });
    };

  }]);
