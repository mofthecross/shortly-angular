angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url) {
    Links.addOne(url)
      .then(function(response) {
        console.log('addLink', response);
      })
      .catch(function(error) {
        console.log(error);
      });

  };

});
