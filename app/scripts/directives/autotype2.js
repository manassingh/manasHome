'use strict';

/**
 * @ngdoc directive
 * @name manasHomeApp.directive:autoType2
 * @description
 * # autoType2
 */
angular.module('manasHomeApp')
  .directive('autoType2', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	var text2 =  'From Lucknow, \n\n INDIA. \n\n\n\n';
      	var text3 = 'I am interactive Designer , Software developer and an Artist.\n\n ';
      	var text4 = 'Have experience in Digital Art, Front-End development and Android development.';
               
	    var index2=0;
	    var enterText2 = function(event) {
	      if (index2 <= text2.length) {
	          element.text(text2.substr(0, index2++) + '  |');
	          setTimeout(enterText2, 50);
	      }else{
	      	deleteText2();
	      }
	    };
	    var backIndex = text2.length;
	    var deleteText2 = function(event) {
	      
	      if (0 <= backIndex) {
	          element.text(text2.substr(0, backIndex--) + '  |');
	          setTimeout(deleteText2, 30);
	      }else{
	      	backIndex=text2.length;
	      	enterText3();
	      }
	    };

	    var index3=0;
	    var enterText3 = function(event) {
	      if (index3 <= text3.length) {
	          element.text(text3.substr(0, index3++) + '  |');
	          setTimeout(enterText3, 50);
	      }else{
	      	enterText4();
	      }
	    };
	    var index4=0;
	    var enterText4 = function(event) {
	      if (index4 <= text4.length) {
	          element.text(text3 + text4.substr(0, index4++) + '  |');
	          setTimeout(enterText4, 50);
	      }else{
	      	element.text(text3 + text4);
	      }
	    };
	    setTimeout(enterText2, 5300);
	    
      }
    };
  });
