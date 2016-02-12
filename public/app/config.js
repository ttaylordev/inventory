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
      name: 'jobList.newJobModal', // displaying on top bar as joblist.newJobModal
      url: '/newJob', // being called as jobList/newJob
      templateUrl: './app/views/newJob/newJobTemplate.html',
      controller: 'newJobCtrl'
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

    // resolve that checks for auth true, if not, takes you back ot landing page
    // specify the url in the routing, so that we can shortcut while typing in the url.
    // it gives it a way to parse the url and direct it to where it ought to go.

    $stateProvider
      .state( jobListState )
      .state( newJobModalState )
      .state( workOrderState )
      .state( purchaseOrderState )
      .state( landingState );


  } );
