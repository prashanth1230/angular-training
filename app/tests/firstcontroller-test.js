(function () {
    'use strict';
    describe("Testing First Controller", function () {
        beforeEach(module("app"));

        var controller;

        beforeEach(inject(function ($controller) {
            controller = $controller;
        }));

        it("checking for getHeroName", function () {
            var emptyScope = {};

            controller("firstController", {
                $scope: emptyScope
            });
            expect(emptyScope.getHeroName()).toEqual("Batman");
        });
    });
}());
