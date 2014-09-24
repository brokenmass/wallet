'use strict';

describe('Controller: CreatewalletCtrl', function () {

  // load the controller's module
  beforeEach(module('walletApp'));

  var CreatewalletCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatewalletCtrl = $controller('CreatewalletCtrl', {
      $scope: scope
    });
  }));

});
