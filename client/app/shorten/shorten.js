angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    console.log('After link submit: ', $scope.link.url);
    Links.addOne($scope.link.url); 
  };


});
