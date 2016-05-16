'use strict';

/**
 * @ngdoc service
 * @name manasHomeApp.work
 * @description
 * # work
 * Service in the manasHomeApp.
 */
angular.module('manasHomeApp')
  .service('work', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getWork = function(){
        return $http.get('menu/work.json').then(function (response) {
            return response.data;
          });
    };
    this.getSketches = function(){
        return $http.get('menu/sketches.json').then(function (response) {
            return response.data;
          });
    };

    this.getConceptArtList = function(){
        return $http.get('menu/conceptart.json').then(function (response) {
            return response.data;
          });
    };

    this.getPhotoList = function(){
        return $http.get('menu/photo.json').then(function (response) {
            return response.data;
          });
    };

    this.getProjectsList = function(){
        return $http.get('menu/projects.json').then(function (response) {
            return response.data;
          });
    };
  });
