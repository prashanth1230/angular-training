(function () {
    'use strict';
    /*global angular*/
    var heroData = function ($scope, dataFactory) {
        dataFactory.hd.success(function (response, status, xhr) {
            $scope.heroes = response;
        }).error(function (error, status, xhr) {
            alert(status);
        });

    };
    angular.module('app').controller('herosController', heroData);
}());
