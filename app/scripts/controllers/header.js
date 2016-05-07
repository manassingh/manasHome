'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('HeaderCtrl', ['header',function (header) {
    var self= this;
    var currentMenu;
    var flagAlreadySelected = true;

    //mobile menu
    var flagMenuOpen=0;
    self.showMenuMobile = function(event){
        var menuDiv = event.target.parentElement.children[1];
        var menuIcon = event.target;
        console.log(menuIcon);
        if(!flagMenuOpen){
            $(menuIcon).removeClass('menuIcon');
            $(menuIcon).addClass('menuIconClose');
            $(menuDiv).removeClass('hidden-xs');
            flagMenuOpen=1;
        }else{
            $(menuIcon).removeClass('menuIconClose');
            $(menuIcon).addClass('menuIcon');
            $(menuDiv).addClass('hidden-xs');
            flagMenuOpen=0;
        }
        
    };

    //getting data from header service
    header.getMenu().then(function(data){
  		self.menuList=data;
  	});
    currentMenu= header.getSelectedMenu();
    
    //click color change
    self.selectedMenu = function(event){
    	var links=angular.element(document.getElementsByClassName('headerLinks'));
    	for(var i = 0; i < links.length; i++){
		   links[i].style.color='black';
		}
		if (event.target.tagName.toUpperCase()==='DIV') {
			event.target.children[0].style.color='white';
    		flagAlreadySelected = true;
		}else if (event.target.tagName.toUpperCase()==='P'){
    		event.target.style.color='white';
    		flagAlreadySelected = true;
    	}
    	
    };

    //hover color change
    self.hoverIn = function(event){
    	if (event.target.tagName.toUpperCase()==='DIV') {
    		if (event.target.children[0].style.color==='white') {
	    		flagAlreadySelected = true;
	    	}else{
	    		flagAlreadySelected = false;
	    	}
	    	event.target.children[0].style.color='white';
    	}
    };
    self.hoverOut = function(event){
    	if (!flagAlreadySelected) {
    		//console.log('out not selected');
    		event.target.children[0].style.color='black';
    	}
    	
    };
  }]);
