angular.module( "inventoryApp" )
  .service( "customerSvc", function ($http) {


    this.getCustomers = function () {
      return $http( {
          method: 'GET',
          url: '/customer' // the url here is super simplified, because we're hosting this off our localhost
            // endpoint url,

        } )
        .then( function ( response ) {
          return response;
        } );
    };

    // singular customer
    this.getCustomer = function () {
      return $http( {
        method: 'GET',
        url: '/customer?_id=' + id
      } );
    };

    this.createCustomer = function ( customer ) {
      return $http( {
          method: 'POST',
          url: '/customer',
          data: customer
        } )
        .then( function ( response ) {
          return response;
        } );
    };

    this.editCustomer = function ( id, customer ) {
      return $http( {
          method: 'PUT',
          url: "/customer/" + id,
          data: customer
        } )
        .then( function ( response ) {
          console.log( 'Waiter delivers meal ', response.data );
          return response;
        } );
    };

    this.deleteCustomer = function () {
      return $http( {
          method: 'DELETE',
          url: '/customer/' + id
        } )
        .then( function ( response ) {
          return response;
        } );
    };

  } );
