'use strict';

/**
 * @ngdoc directive
 * @name walletApp.directive:transactionList
 * @description
 * # transactionList
 */
angular.module('walletApp')
	.directive('transactionList', function ()
		{
		return {
			templateUrl: 'views/transactionList.html',
			restrict: 'E'
			};
		});
