'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('WorkCtrl', ['header','work',function (header,work) {
  	var self = this;

    //getting data from work service
    work.getWork().then(function(data){
      self.workList=data;

    });

    self.openModel = function(event){
      $('#model' + event.target.id).modal('show');
    };

    angular.element(window).load(function () {
    });
  	angular.element(document).ready(function () {
  		var menuList;
	  	header.getMenu().then(function(data){
	  		menuList=data;
	  		header.setSelectedMenu(menuList[1].index);
	  	});
      
    });
  }]);
