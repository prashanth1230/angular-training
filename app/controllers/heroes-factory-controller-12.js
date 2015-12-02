(function () {
    'use strict';
    /*global angular*/
    var heroData = function ($scope, dataFactory) {
        $scope.heroes = dataFactory.hd;

    };
    angular.module('app').controller('herosController', heroData);
}());
