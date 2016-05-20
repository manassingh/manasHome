'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('DetailsCtrl', ['portfolio',function (portfolio) {
    var self = this;

    /*getting experience data from portfolio service*/
    portfolio.getExperience().then(function(data){
      self.experienceList=data;
    });

    /*getting education data from portfolio service*/
    portfolio.getEducation().then(function(data){
      self.educationList=data;
    });

    /*getting skills data from portfolio service*/
    portfolio.getSkills().then(function(data){
      self.skillsList=data;
    });


  }]);
