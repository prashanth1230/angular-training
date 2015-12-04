(function () {
    'use strict';
    /*global angular*/
    var moviesData = function ($scope, $routeParams, dataFactory, $http) {
        dataFactory.hd.success(function (response, status, xhr) {
            $scope.heroes = response;
            $scope.movies = [];
            $scope.heroId = $routeParams.hid;
            setMovies();
        }).error(function (error, status, xhr) {
            alert(status);
        });

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

        $scope.addMovie = function () {
            var body = {
                sl: $scope.movies.length + 1,
                title: $scope.title,
                poster: $scope.poster
            };
            $http.put('/movies/' + $scope.heroId, body).success(function (r, s, x) {
                $scope.heroes = r;
                console.log('Data sent successfully');
                setMovies();
            }).error(function (r, s, x) {
                console.log('Something went wrong');
            });
        };
    };
    angular.module('app').controller('moviesController', moviesData);
}());
