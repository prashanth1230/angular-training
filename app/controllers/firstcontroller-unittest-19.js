(function () {
    'use strict';
    /*global angular*/
    var firstController = function ($scope) {
        $scope.getHeroName = function () {
            return 'Batman';
        }
    };
    angular.module('app').controller('firstController', firstController);
}());
