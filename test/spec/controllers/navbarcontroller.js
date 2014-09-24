'use strict';

describe('Controller: NavbarcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('walletApp'));

  var NavbarcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarcontrollerCtrl = $controller('NavbarcontrollerCtrl', {
      $scope: scope
    });
  }));
});
