angular.module('inventoryApp')
  .controller('jobCtrl', ['$scope', '$location', 'mainSvc', 'woSvc', 'jobSvc', function ($scope, $location, mainSvc, woSvc, jobSvc) {

    $scope.workOrdersArray = [];
    $scope.workOrders = [];
    $scope.workOrder = {};
    $scope.selectedCustomer;
    $scope.workOrderDetails = [];
    $scope.job = mainSvc.job;

    // $scope.logthisthing = function(){
    //   console.log("log this thing");
    // }
    $scope.isComplete = function (wO) {
      wO.isComplete = true;
      console.log(wO);
      $scope.updateWorkOrder(wO._id, wO);
    }

    // called from customerTmpl.html to give workOrder an associated customerId.\\
    $scope.setCustIdToWorkOrder = function () {
        $scope.workOrder.customerId = $scope.selectedCustomer._id;
        // console.log( $scope.workOrder.customerId );
        // console.log( $scope.selectedCustomer.firstName );
      }
      // new section
    $scope.updateWorkOrder = function (id, updatedWorkOrder) {
      woSvc.editWorkOrder(id, updatedWorkOrder)
        .then(function (response) {
          $scope.getWorkOrders();
        });
    }

    $scope.getWorkOrderDetails = function () {
      jobSvc.getWorkOrderDetails()
        .then(function (response) {
          $scope.workOrderDetails = response.data;
          console.log($scope.workOrderDetails, ': from jobCtrl');
        });
    }
    $scope.getWorkOrderDetails();

    $scope.getWorkOrders = function () {
      woSvc.getWorkOrders()
        .then(function (response) {
          $scope.workOrders = response.data;
        });
    }
    $scope.getWorkOrders();

  }]);









// $scope.getCustomer = function (id) {
//   customerSvc.getCustomer(id)
//     .then( function ( response ) {
//       $scope.customers = response.data
//     } );
// }


// $scope.workOrderDetails = function(workOrders){
//   for(var workOrder in workOrders){
//     $scope.getCustomer(workOrder.customerId);
//     $scope.workOrderDetails = [$scope.workOrder, response.data];
//     console.log($scope.workOrderDetails);
//     return $scope.workOrderDetails;
//   }
// }
// $scope.workOrderDetails($scope.workOrders);


// $scope.deleteWorkOrder = function(workOrder){
//   woSvc.deleteWorkOrder(workOrder).then(function(res){
//     $scope.workOrders = $scope.workOrders.reduce(function(prev, cur){
//       if (cur._id != workOrder._id){
//         prev.push(cur);
//       }
//       return prev;
//     }, [])
//   });
// }

// function to load addJob modal
// $scope.addJob = function () {
//   console.log( 'addJob button is logging' );
//   $location.path( '../newJob/newJobTemplate' );
// }



//date filter that filters it into a time format
// lookup angular date format
// /:
// on an html input use a date time picker input, this might avoid having to put it into a date time format string
