(function () {
    'use strict';
    /*global angular*/
    var heroData = function ($scope, dataFactory, $http) {
        dataFactory.hd.success(function (response, status, xhr) {
            $scope.heroes = response;
        }).error(function (error, status, xhr) {
            alert(status);
        });

        $scope.id = '';
        $scope.title = '';
        $scope.power = '';
        $scope.city = '';
        $scope.power = '';
        $scope.movies = '';
        $scope.photo = '';

        $scope.addHero = function () {
            alert('Do you really want to add a hero?');
            $http.post('/heros');
        }

    };
    angular.module('app').controller('herosController', heroData);
}());
