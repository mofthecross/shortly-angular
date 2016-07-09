// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  //var validUsername = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

  var validate = document.getElementsByClassName('errorMessage ng-inactive');

  $scope.signin = function () {
    if (!validate[0]) {
      console.log('stop trynna hack you fool');
    } else {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    if (!validate[0]) {
      console.log('stop trynna hack you fool');
    } else {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
});
