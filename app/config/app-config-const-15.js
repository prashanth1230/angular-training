(function () {
    'use strict';
    /*global angular*/
    angular.module('app').config(function (constData) {
        alert('Constant injected to the config file ' + constData.compName);
    });
}());