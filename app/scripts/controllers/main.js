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

		dataProvider.getWallet(function(wallet)
			{
			$scope.wallet = wallet;
			});
		$scope.addTransaction = function(dir)
			{
			if(dir === "in")
				{

				}
			console.log($scope.withdrawamount,$scope.withdrawamount)
			dataProvider.addTransaction(dir,
				dir === "in" ? $scope.depositamount : $scope.withdrawamount,
				function(wallet)
				{
				if(dir === "in")
					$scope.depositamount = null;
				else
					$scope.withdrawamount = null;
				$scope.wallet = wallet;
				});
			}
		}]);
