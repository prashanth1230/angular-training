(function () {
    'use strict';
    /*global angular*/
    var firstController = function ($scope, constData) {
        $scope.compName = constData.compName;
        $scope.b1 = constData.branch1;
        $scope.b2 = constData.branch2;
        $scope.b3 = constData.branch3;
    };
    angular.module('app').controller('firstController', firstController);
}());
