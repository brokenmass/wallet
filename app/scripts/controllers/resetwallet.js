'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:ResetwalletCtrl
 * @description
 * # ResetwalletCtrl
 * Controller of the walletApp
 */

angular.module('walletApp')
	.controller('ResetwalletCtrl',['$scope','$location','persistentDataProvider', function ($scope,$location, dataProvider)
		{
		dataProvider.getWallet(function(wallet)
			{
			if(!wallet)
				{$location.path('/create');}
			});
		$scope.resetWallet = function()
			{
			dataProvider.resetWallet(function()
				{
				$location.url('/');
				});
			};
		}]);