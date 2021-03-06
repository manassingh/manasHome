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
    
    //mobile menu
    var flagMenuOpen=0;
    self.showMenuMobile = function(event){
        var menuDiv = event.target.parentElement.children[1];
        var menuIcon = event.target;
        //console.log(menuIcon);
        if(!flagMenuOpen){
            $(menuIcon).removeClass('menuIcon');
            $(menuIcon).addClass('menuIconClose');
            $(menuDiv).removeClass('hidden-xs');
            $(menuDiv).addClass('headerFullHeight');
            flagMenuOpen=1;
        }else{
            $(menuIcon).removeClass('menuIconClose');
            $(menuIcon).addClass('menuIcon');
            $(menuDiv).addClass('hidden-xs');
            $(menuDiv).removeClass('headerFullHeight');
            flagMenuOpen=0;
        }
        
    };

    //getting data from header service
    header.getMenu().then(function(data){
  		self.menuList=data;
  	});
    this.currentMenu= function(){
        var ind=header.getSelectedMenu();
        var links=angular.element(document.getElementsByClassName('headerLinks'));
        for(var i = 0; i < links.length; i++){
           links[i].style.color='#A2A2A2';
        }
        links[ind].style.color='white';
        return 'headerWhite';
    }; 
    
    //click color change
    self.selectedMenu = function(event){
    	var links=angular.element(document.getElementsByClassName('headerLinks'));
    	for(var i = 0; i < links.length; i++){
		   links[i].style.color='#A2A2A2';
		}
		if (event.target.tagName.toUpperCase()==='DIV') {
			event.target.children[0].style.color='white';
		}else if (event.target.tagName.toUpperCase()==='P'){
    		event.target.style.color='white';
    	}
        var menuDiv = angular.element(document.getElementById('headerRow'));
        var menuIcon = angular.element(document.getElementById('menuIcon'));
        if(!flagMenuOpen){
            $(menuIcon).removeClass('menuIcon');
            $(menuIcon).addClass('menuIconClose');
            $(menuDiv).removeClass('hidden-xs');
            $(menuDiv).addClass('headerFullHeight');
            flagMenuOpen=1;
        }else{
            $(menuIcon).removeClass('menuIconClose');
            $(menuIcon).addClass('menuIcon');
            $(menuDiv).addClass('hidden-xs');
            $(menuDiv).removeClass('headerFullHeight');
            flagMenuOpen=0;
        }
    };
  }]);
