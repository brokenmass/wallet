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
    	currencies      :
    		{
    		"eur" : { icon : "eur" , symbol : "€"},
    		"gbp" : { icon : "gbp" , symbol : "£"},
    		"usd" : { icon : "usd" , symbol : "$"}
    		},
    	getCurrencies   : function(callback)
    		{
    		if(callback)
    			callback(this.currencies);
    		},
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
    		console.log("Dsds")
    		this.wallet =
    			{
    			currency : "eur",
    			total    : 0,
    			transactions : []
    			}

    		if(callback)
    			callback(this.wallet);
    		},
    	addTransaction : function(dir,amount,callback)
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
