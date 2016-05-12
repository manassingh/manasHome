'use strict';

/**
 * @ngdoc directive
 * @name manasHomeApp.directive:autoType
 * @description
 * # autoType
 */
angular.module('manasHomeApp')
  .directive('autoType', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	

      	var text1 = 'Hey, \n\ni am Manas Singh.';
	          
      	var index=0;
      	var enterText1 = function(event) {
  	      if (index <= text1.length) {
  	          element.text(text1.substr(0, index++) + '  |');
  	          setTimeout(enterText1, 70);
  	      }else{
  	      	element.text(text1);
  	      }
  	    };
        angular.element(document).ready(function(){
          setTimeout(enterText1, 1500);
        });
      
	    
	    
        //element.text('this is the autoType directive');
      }
    };
  });
