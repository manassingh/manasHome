'use strict';

/**
 * @ngdoc overview
 * @name manasHomeApp
 * @description
 * # manasHomeApp
 *
 * Main module of the application.
 */
angular
  .module('manasHomeApp', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  		.state('home', {
  			url: '/',
  			templateUrl: 'views/home.html',
  			controller: 'HomeCtrl as home'
  		})
  		.state('work', {
  			url: '/work',
  			templateUrl: 'views/work.html',
  			controller: 'WorkCtrl as work'
  		})
  		.state('portfolio', {
  			url: '/portfolio',
  			templateUrl: 'views/portfolio.html',
  			controller: 'PortfolioCtrl as portfolio'
  		})
  		.state('contact', {
  			url: '/contact',
  			templateUrl: 'views/contact.html',
  			controller: 'ContactCtrl as contact'
  		})
  		.state('acknowledgement', {
  			url: '/acknowledgement',
  			templateUrl: 'views/acknowledgement.html',
  			controller: 'AcknowledgementCtrl as acknowledgement'
  		})
      ;
  }]);
