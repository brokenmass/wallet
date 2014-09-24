'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
	.controller('MainCtrl',["$scope","sampleDataProvider", function ($scope, dataProvider)
		{
		$scope.wallet = {};
		$scope.transactions = [];

		console.log($scope.wallet);
		dataProvider.getWallet(function(wallet)
			{
			$scope.wallet = wallet;
			});
		$scope.addAmount = function(dir)
			{

			}
		}]);
