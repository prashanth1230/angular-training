(function () {
    'use strict';
    /*global angular*/
    var firstController = function ($scope, compData) {
        $scope.compName = compData.compName;
        $scope.b1 = compData.branch1;
        $scope.b2 = compData.branch2;
        $scope.b3 = compData.branch3;
    };
    angular.module('app').controller('firstController', firstController);
}());
