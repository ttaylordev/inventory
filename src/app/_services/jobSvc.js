angular.module("inventoryApp")
  .service("jobSvc", ['$http', function ($http) {

    this.getWorkOrderDetails = function () {
      return $http({
          method: 'GET',
          url: '/schedule'
        })
        .then(function (response) {
          return response;
        });
    };

}]);
