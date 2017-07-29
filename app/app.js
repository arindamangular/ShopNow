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
                    templateUrl: 'layout/landing.html',
                    controller: 'loginController'
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
                    templateUrl: 'layout/homePage.html'
                },
                'header@home':{
                    templateUrl: 'staticContent/appHeader.html'
                },
                'footer':{
                    templateUrl : 'staticContent/appFooter.html'
                }
            },
            resolve: {
                check: function($q, $timeout, userAuth){

                    userAuth.checkUserAuth("adminq", "adminqq");
                   // var deferred = $q.defer();
                   // $timeout(function(){
                   //     deferred.reject("Allo!");
                   // },2000); 
                   // return deferred.promise;
                }  
            }
        })
        .state('home.pdp' , {
            url: '/pdpView',
            views: {
                'pdp':{
                    templateUrl: 'productDetail/pdp_view.html'
                }
            }
        });
});

