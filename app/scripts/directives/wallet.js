'use strict';

/**
 * @ngdoc directive
 * @name walletApp.directive:wallet
 * @description
 * # wallet
 */
angular.module('walletApp')
	.directive('wallet', function () {
		return {
			templateUrl: 'views/wallet.html',
			restrict: 'E'
		};
	});
