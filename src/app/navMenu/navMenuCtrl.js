angular.module('inventoryApp')
  .controller('navMenuCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.menuItems = [
      {
        display: 'Schedule',
        route: 'jobList'
    }, {
        display: 'Completed',
        route: 'completed'
    }, {
        display: 'WorkOrders',
        route: 'workOrders' //needs to match up with router
      }
    ];


    //   {
    //     display: 'Inventory',
    //     route: 'landing'
    // }

    // TODO: find a way to close the menuModal, without specifying a path here, maybe a large pseudo element with an onclick, and an onclick for the location, closing the modal as well
    // $scope.closeModalByRoute = function (route) {
    // var path = $location.path;
    // console.log(path);
    // $location.path('/purchaseOrder');
    // console.log(path);
    // };
  }]);

// TODO: an issue here, with where to route it... maybe a track by menuItem.route or soemthing



//TODO: make an inventory list page and route it properly, right now, the inventory is routing to landing within this controller.
