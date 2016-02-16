angular.module("inventoryApp")
.service("jobSvc", function($http) {
  
  this.getWorkOrderDetails = function () {
    return $http( {
        method: 'GET',
        url: '/schedule'
      } )
      .then( function ( response ) {
        return response;
      } );
  };

});
