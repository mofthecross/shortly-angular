angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    var validate = document.getElementsByClassName('errorMessage ng-inactive');
    console.log('validate', validate);
    if (!validate[0]) {
      console.log('url not valid');
    } else {
      Links.addOne($scope.link.url); 
    }
  };

});
