(function () {
    'use strict';
    /*global angular*/
    angular.module('app').config(function ($routeProvider) {
        $routeProvider.when('/', {
            conteoller: 'herosController',
            templateUrl: 'views/heroes-view.html'
        });
    })
}());