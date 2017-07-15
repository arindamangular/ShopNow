'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);


var app = angular.module("myApp", ['ui.router']);

// app.config(function($routeProvider) {
// 	$routeProvider
// 		.when('/view1', {
// 			templateUrl: 'view1/view1.html',
// 			controller: 'myController'
// 		})
// 		.when('/view2', {
// 		})
// 		.otherwise({
// 			redirectTo: 'view2/view2.html'
// 		});
// });





app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('root', {
            url: '/',
            
            views: {
                '' : {
                    templateUrl: 'view1/landing.html'
                },
                'footer':{
                    templateUrl : 'staticContent/appFooter.html'
                }
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('home', {
            url: '/home',
            views: {
                '' : {
                    templateUrl: 'view1/homePage.html'
                },
                'header@home':{
                    templateUrl: 'staticContent/appHeader.html'
                },
                'footer@home':{
                    templateUrl : 'staticContent/appFooter.html'
                }
            }  
        });

});

