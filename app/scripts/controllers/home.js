'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('HomeCtrl', ['header',function (header) {
  	//var self = this;
  	angular.element(document).ready(function () {
  		var menuList;
	  	header.getMenu().then(function(data){
	  		menuList=data;
	  		header.setSelectedMenu(menuList[0].id);
	  	});
    });
  }]);
