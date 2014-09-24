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
    	wallet          : null,
    	getWallet       : function(callback)
    		{
    		if(!this.wallet)
	    		{
	    		this.resetWallet(callback);
	    		}
    		else if(callback)
    			callback(this.wallet);
    		},
    	resetWallet     : function(callback)
    		{
    		this.wallet =
    			{
    			currency : "eur",
    			total    : 2220,
    			transactions : []
    			}

    		if(callback)
    			callback(this.wallet);
    		},
    	addTransactions : function(dir,amount,callback)
    		{
    		if(this.wallet)
    			{
    			this.wallet.transactions.push(
		    		{
					dir   : dir,
		    		date  : new Date(),
		    		amount: amount
		    		});
    			this.wallet.total += (dir==="in" ? 1 : -1)*amount;
	    		if(callback)
	    			callback(this.wallet);
    			}
    		},
    	}
    return dataProvider;
  });
