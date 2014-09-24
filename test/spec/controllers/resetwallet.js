'use strict';

describe('Controller: ResetwalletCtrl', function () {

  // load the controller's module
  beforeEach(module('walletApp'));

  var ResetwalletCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResetwalletCtrl = $controller('ResetwalletCtrl', {
      $scope: scope
    });
  }));
});
