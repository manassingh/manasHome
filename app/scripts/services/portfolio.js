'use strict';

/**
 * @ngdoc service
 * @name manasHomeApp.portfolio
 * @description
 * # portfolio
 * Service in the manasHomeApp.
 */
angular.module('manasHomeApp')
  .service('portfolio', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getPortfolio = function(){
        return $http.get('menu/portfolio.json').then(function (response) {
            return response.data;
          });
    };
    /*getting experience data from json file*/
    this.getExperience = function(){
        return $http.get('menu/experience.json').then(function (response) {
            return response.data;
          });
    };
    /*getting education data from json file*/
    this.getEducation = function(){
        return $http.get('menu/education.json').then(function (response) {
            return response.data;
          });
    };

    /*getting skills data from json file*/
    this.getSkills = function(){
        return $http.get('menu/skills.json').then(function (response) {
            return response.data;
          });
    };
  });
