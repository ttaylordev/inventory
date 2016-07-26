angular.module('inventoryApp')
  .controller('customerDispCtrl', ['$scope', '$state', 'mainSvc', function ($scope, $state, mainSvc) {

    // query one
    $scope.customerDisp = [{
      firstName: 'Bob',
      lastName: 'Villa',
      address: '123 lomaLinda blvd.',
      city: 'LomaLinda',
      state: 'CA',
      zip: '92517',
      email: 'bvilla@homedepotmail.com',
      warrantyStatus: 'No',
      balance: '0',
  }, {
      firstName: 'Susie',
      lastName: 'Loowho',
      address: '456 Suess St.',
      city: 'Denver',
      state: 'CO',
      zip: '80012',
      email: 'slwho@notadocter.com',
      warrantyStatus: 'Yes',
      balance: '100',
  }, {
      firstName: 'Vincent',
      lastName: 'Malloy',
      address: '667 Price pl.',
      city: 'Burton',
      state: 'Kansas',
      zip: '47812',
      email: 'vpmalloy@nightmare.net',
      warrantyStatus: 'No',
      balance: '0',
  }, {
      firstName: 'Doug',
      lastName: 'Adams',
      address: '42 Islington flat',
      city: 'New York',
      state: 'NY',
      zip: '10024',
      email: 'spaceDolphin@probablynota.com',
      warrantyStatus: 'Yes',
      balance: '58133249870',
  }, ];

    $scope.cDispObj = $scope.customerDisp[0];

  }]);
