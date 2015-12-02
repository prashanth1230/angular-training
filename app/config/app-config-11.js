(function () {
    'use strict';
    /*global angular*/
    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'herosController',
                templateUrl: 'views/heroes-view.html'
            }).when('/movies/:hid', {
            controller: 'moviesController',
            templateUrl: 'views/movies-view.html'
        }).otherwise({
            redirectTo: '/'
        });
    })
}());