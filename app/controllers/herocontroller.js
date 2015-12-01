/**
 * Created by a487037 on 12/01/2015.
 */
angular.module('app').controller('herocontroller', function ($scope) {
    $scope.heros = [
        {
            title: 'Batman',
            fName: 'Bruce',
            lName: 'Wayne',
            city: 'Gotham',
            power: 7,
            releasedate: '2015-11-30',
            price: 123.456789,
            photo: 'images/batman.jpg'
        },
        {
            title: 'Superman',
            fName: 'Clark',
            lName: 'Kent',
            city: 'Metropolis',
            power: 8,
            releasedate: '2015-12-01',
            price: 125.678459,
            photo: 'images/superman.jpg'
        },
        {
            title: 'Ironman',
            fName: 'Tony',
            lName: 'Stark',
            city: 'New York',
            power: 6,
            releasedate: '2015-12-02',
            price: 144.678459,
            photo: 'images/ironman.jpg'
        },
        {
            title: 'Spiderman',
            fName: 'Peter',
            lName: 'Parker',
            city: 'New York',
            power: 7,
            releasedate: '2015-12-03',
            price: 201.674589,
            photo: 'images/spiderman.jpg'
        },
        {
            title: 'Phantom',
            fName: 'Kit',
            lName: 'Walker',
            city: 'Bangala',
            power: 7,
            releasedate: '2015-12-04',
            price: 90.894567,
            photo: 'images/phantom.jpg'
        }];
    $scope.sortBy = 'title';
    $scope.rev = false;

    $scope.sortIt = function (val) {
        $scope.sortBy = val;
        $scope.rev = !$scope.rev;
    }
});