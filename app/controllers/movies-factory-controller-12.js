(function () {
    'use strict';
    /*global angular*/
    var moviesData = function ($scope, $routeParams, dataFactory) {
        $scope.heroes = dataFactory.hd;
        $scope.movies = [];
        $scope.heroId = $routeParams.hid;
        setMovies();

        function setMovies() {
            for (var i = 0; i < $scope.heroes.length; i++) {
                if ($scope.heroes[i].id == parseInt($scope.heroId)) {
                    $scope.movies = $scope.heroes[i].movieslist;
                    console.log($scope.movies);
                }
            }
        }

        $scope.goBack = function () {
            history.back();
        };
    };
    angular.module('app').controller('moviesController', moviesData);
}());
