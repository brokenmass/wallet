'use strict';

/**
 * @ngdoc service
 * @name walletApp.sampleDataProvider
 * @description
 * # sampleDataProvider
 * Service in the walletApp.
 */
angular.module('walletApp')
  .service('sampleDataProvider', function sampleDataProvider()
  	{
    var dataProvider =
    	{
    	wallet       : {},
    	total        :  0,
    	transactions : [],
    	getWallet       : function(callback) {},
    	resetWallet     : function(callback) {},
    	getTransactions : function(callback) {},
    	addTransactions : function(action,amount,callback){},
    	}
    return dataProvider;
  });
