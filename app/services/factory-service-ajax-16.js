/**
 * Created by a487037 on 12/02/2015.
 */
(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('dataFactory', function ($http) {
        return {
            hd: $http.get('data/heros.json')
        };
    })
}());