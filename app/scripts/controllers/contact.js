'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('ContactCtrl', ['header',function (header) {
  	//var self = this;
  	angular.element(document).ready(function () {
  		var menuList;
	  	header.getMenu().then(function(data){
	  		menuList=data;
	  		header.setSelectedMenu(menuList[3].index);
        console.log('header set from contact');
	  	});
    });
  }]);
