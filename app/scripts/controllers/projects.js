'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('ProjectsCtrl', ['work',function (work) {
  	var self = this;

    //getting sketches from work service
    work.getSketches().then(function(data){
      self.sketchkList=data;
    });

    //getting concept art from work service
    work.getConceptArtList().then(function(data){
      self.conceptArtList=data;
    });

    //getting photos from work service
    work.getPhotoList().then(function(data){
      self.photoList=data;
    });

    
  }]);
