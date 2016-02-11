angular.module( 'inventoryApp' )
  .config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/jobList' );

    var jobListState = {
      name: 'jobList',
      url: '/jobList',
      templateUrl: './app/views/jobList/jobList.html',
      controller: 'jobCtrl'
    };
    var newJobModalState = {
      name: 'jobList.newJobModal',
      url: '/newJob',
      templateUrl: './app/views/newJob/newJobTemplate.html',
      controller: 'newJobCtrl'
    };
    var authState = {
      name: 'auth',
      url: '/auth',
      templateUrl: './app/views/auth/authTmpl.html',
      controller: 'authCtrl'
    };
    var landingState = {
      name: 'landing',
      url: '/landing',
      templateUrl: './app/views/landing/landingTmpl.html',
      controller: 'landingCtrl'
    };
    var workOrderState = {
      name: 'workOrder',
      url: '/workOrder',
      templateUrl: './app/views/workOrder/workOrderTmpl.html',
      controller: 'workOrderCtrl'
    };
    var purchaseOrderState = {
      name: 'purchaseOrder',
      url: '/purchaseOrder',
      templateUrl: './app/views/purchaseOrder/poTmpl.html',
      controller: 'poCtrl'
    };




    $stateProvider
      .state( jobListState )
      .state( newJobModalState )
      .state( authState )
      .state( workOrderState )
      .state( purchaseOrderState )
      .state( landingState );


  } );
