// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/construction.html',
                controller  : 'aboutController'
            })

            // route for the menu page
            .when('/menu', {
                templateUrl : 'pages/construction.html',
                controller  : 'menuController'
            })
        
        .when('/deal', {
            templateUrl : 'pages/construction.html',
            controller  : 'dealController'
        });
    });

    scotchApp.controller('RangeImg', function ($scope) {
    	$scope.rangeImg = {
    			background: 'url(pics/gantry.JPG)'
    	};
    });
    
    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.page = 'A Bit About Us.';
    });

    scotchApp.controller('menuController', function($scope) {
        $scope.page = 'Menu';
    });
    
    scotchApp.controller('dealController', function($scope) {
        $scope.page = 'Offers';
    });

    //ng-controller="RangeImg" ng-style="rangeImg"