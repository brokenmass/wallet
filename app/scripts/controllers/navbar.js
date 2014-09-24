'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:NavbarcontrollerCtrl
 * @description
 * # NavbarcontrollerCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
  .controller('NavbarCtrl',['$scope','$location', function ($scope,$location)
  	{
    $scope.isActive = function (viewLocation)
    	{
        return viewLocation === $location.path();
    	};
  	}]);
