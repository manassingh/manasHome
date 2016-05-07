'use strict';

/**
 * @ngdoc service
 * @name manasHomeApp.header
 * @description
 * # header
 * Service in the manasHomeApp.
 */
angular.module('manasHomeApp')
  .service('header', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var selectedMenu = 'home';
    this.getMenu = function(){
        return $http.get('menu/menu.json').then(function (response) {
            return response.data;
          });
    };
    this.setSelectedMenu = function(menu){
    	selectedMenu = menu;
    };
    this.getSelectedMenu = function(){
    	return selectedMenu;
    };
  });
