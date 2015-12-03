(function () {
    'use strict';
    /*global angular*/
    var heroData = function ($scope, dataService) {
        $scope.heroes = dataService.getData();

    };
    angular.module('app').controller('herosController', heroData);
}());
