'use strict';

// angular.module('myApp.view1', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])

// .controller('View1Ctrl', [function() {

// }]);

app.controller("myController", function($scope) {
 
        $scope.data = { time : new Date() };

        $scope.updateTime = function() {
            $scope.data.time = new Date();
        }

        document.getElementById("updateTimeButton")
                .addEventListener('click', function() {
                	$scope.$apply(function () {
                		console.log("update time clicked");
            			$scope.data.time = new Date();
                	});
            
        });
    });