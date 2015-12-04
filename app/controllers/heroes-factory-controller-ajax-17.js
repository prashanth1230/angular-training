(function () {
    'use strict';
    /*global angular*/
    var heroData = function ($scope, dataFactory, $http) {
        dataFactory.hd.success(function (response, status, xhr) {
            $scope.heroes = response;
        }).error(function (error, status, xhr) {
            alert(status);
        });

        $scope.title = '';
        $scope.power = '';
        $scope.city = '';
        $scope.photo = '';

        $scope.addHero = function () {
            var body = {
                id: $scope.heroes.length + 1,
                title: $scope.title,
                power: $scope.power,
                city: $scope.city,
                photo: $scope.photo
            };
            $http.post('/heros', body).success(function (r, s, x) {
                $scope.heroes = r;
                console.log('Data sent successfully');
                $scope.title = '';
                $scope.power = '';
                $scope.city = '';
                $scope.photo = '';
            }).error(function (r, s, x) {
                console.log('Something went wrong');
            });
        }

    };
    angular.module('app').controller('herosController', heroData);
}());
