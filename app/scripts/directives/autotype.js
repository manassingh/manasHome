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
      	var index=0;

      	var text='My self Manas Singh,  \n \n \n Interactive Designer and Software developer.';
      	var backIndex = text.length;
      	console.log(backIndex);
      	element.text(text);
	          

      	var nextLetter = function(event) {
	      //console.log('in');
	      //return text;
	      if (index <= text.length) {
	          element.text(text.substr(0, index++) + ' |');
	          //console.log(element.text());
	          setTimeout(nextLetter, 80);
	      }else{
	      	backLetter();
	      }
	      //console.log('out if' + element.text());
	      /*if (0 <= backIndex) {
	          element.text(text.substr(0, backIndex--) + ' |');
	          console.log(element.text);
	          setTimeout(nextLetter, 40);
	      }*/
	    };
	    console.log('2'+ backIndex);
	    var backLetter = function(event) {
	      
	      if (0 <= backIndex) {
	          element.text(text.substr(0, backIndex--) + ' |');
	          console.log(element.text());
	          setTimeout(nextLetter, 40);
	      }else{
	      	index=0;
	      	backIndex=text.length;
	      	nextLetter();
	      }
	    };
	    nextLetter();
	    
        //element.text('this is the autoType directive');
      }
    };
  });
