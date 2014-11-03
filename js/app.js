/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

//create a new angular module- everything in angular go into modules; avoids creating global variables
//function is where we declare our states
angular.module('MovieApp', [])
    .controller('MoviesController', function($scope) {
        //create a new property on the scope
        $scope.movies = movies;
        $scope.searchString = '';
        $scope.sortCol = 'rank';

        //adding new key and value pair
        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;
        };
    });
