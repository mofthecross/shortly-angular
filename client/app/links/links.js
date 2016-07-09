angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.data = {};
  
  $scope.getAll = function() {
    Links.getAll()
      .then(function(response) {

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

// $scope.init = function () {
//     if ($routeParams.Id) {
//         //get an existing object
//     } else {
//         //create a new object
//     }
//     $scope.isSaving = false;
// }
// ...
// $scope.init();

});
