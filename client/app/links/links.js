angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll()
      .then(function(links) {
        $scope.data.links = links;
        $location.path('/links');
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  
  $scope.init = function() {
    return $scope.getAll();
  };

  $scope.init();

});
