app.controller('MainCtrl', ['$scope','$auth',function($scope, $auth){
  $scope.test = 'Hello world!';

  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        console.log('yay!')
      })
      .catch(function(resp) {
        console.log('nooo')
      });
  };
}]);
