'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:CreatewalletCtrl
 * @description
 * # CreatewalletCtrl
 * Controller of the walletApp
 */

angular.module('walletApp')
	.controller('CreatewalletCtrl',["$scope","$location","sampleDataProvider", function ($scope,$location, dataProvider)
		{
		$scope.currencies = {};
		$scope.selectedcurrency = null;
		dataProvider.getCurrencies(function(currencies)
			{
			$scope.currencies = currencies;
			$scope.selectedcurrency = Object.keys(currencies)[0];
			});
		dataProvider.getWallet(function(wallet)
			{
			if(wallet)
				{
				$location.path("/");
				}
			});
		$scope.createWallet = function()
			{
			dataProvider.createWallet($scope.selectedcurrency,function()
				{
				$location.path("/");
				});
			}
		}]);
