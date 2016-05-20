'use strict';

/**
 * @ngdoc function
 * @name manasHomeApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the manasHomeApp
 */
angular.module('manasHomeApp')
  .controller('PortfolioCtrl', ['header','portfolio',function (header,portfolio) {
    var self = this;

    //getting data from protfolio service
    portfolio.getPortfolio().then(function(data){
      self.portfolioList=data;

    });

    self.openModel = function(event){
      $('#model' + event.target.id).modal('show');
    };
    angular.element(document).ready(function () {
      var menuList;
      header.getMenu().then(function(data){
        menuList=data;
        header.setSelectedMenu(menuList[2].index);
      });
    });
  }]);
