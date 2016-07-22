angular.module('inventoryApp')
  .service('copyrightSvc', function () {

    this.testCopyrightSvc = function () {
      var copyrightSvcIsLoading = 'copyrightsvc is loading';
      return copyrightSvcIsLoading;
    };

    this.yearFunc = function () {
      var getYear = 2015;
      return getYear;
    };
  });
