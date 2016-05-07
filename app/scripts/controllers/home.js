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
  	var self = this;
    var text = 'try this example';
    //var index = 0;

    self.nextLetter = function(event) {
     // console.log(event);
      return text;
     /* if (index <= type_this.length) {
          demo_input.value = type_this.substr(0, index++);
          setTimeout("next_letter()", 50);
      }*/
    };
  	angular.element(document).ready(function () {
      //console.log($('#myContainer'));
  		var menuList;
	  	header.getMenu().then(function(data){
	  		menuList=data;
	  		header.setSelectedMenu(menuList[0].id);
	  	});
    });
  }]);
