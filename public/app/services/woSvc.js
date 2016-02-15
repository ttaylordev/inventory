angular.module( "inventoryApp" )
  .service( "woSvc", function ($http) {


    this.getWorkOrders = function () {
      return $http( {
          method: 'GET',
          url: '/workOrder'
        } )
        .then( function ( response ) {
          return response;
        } );
    };

    // singular workOrder
    this.getWorkOrder = function () {
      return $http( {
        method: 'GET',
        url: '/workOrder?_id=' + id
      } );
    };

    this.createWorkOrder = function ( workOrder ) {
      return $http( {
          method: 'POST',
          url: '/workOrder',
          data: workOrder
        } )
        .then( function ( response ) {
          return response;
        } );
    };

    this.editWorkOrder = function ( id, workOrder ) {
      return $http( {
          method: 'PUT',
          url: "/workOrder/" + id,
          data: workOrder
        } )
        .then( function ( response ) {
          return response;
        } );
    };

    this.deleteWorkOrder = function () {
      return $http( {
          method: 'DELETE',
          url: '/workOrder/' + id
        } )
        .then( function ( response ) {
          return response;
        } );
    };

  } );
