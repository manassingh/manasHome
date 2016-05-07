'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('WorkCtrl', ['header',function (header) {
  	//var self = this;
  	angular.element(document).ready(function () {
  		var menuList;
	  	header.getMenu().then(function(data){
	  		menuList=data;
	  		header.setSelectedMenu(menuList[1].id);
	  	});
    });
  }]);
