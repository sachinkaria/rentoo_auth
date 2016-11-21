app.controller('MainCtrl', ['$scope','$auth',function($scope, $auth){
  $scope.signedUp = false;
  $scope.current_user = $auth.user;

  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
    .then(function() {
      console.log('SUCCESS')
    })
    .catch(function(){
      console.log('FAILED')
    })
  };

  $scope.handleLoginBtnClick = function() {
    $auth.submitLogin($scope.registrationForm)
    .then(function(resp) {
      console.log('SUCCESS');
    })
    .catch(function(resp) {
      console.log('FAILED.');
    });
  };

  $scope.handleSignOutBtnClick = function() {
  $auth.signOut()
    .then(function(resp) {
      console.log('SUCCESS');
    })
    .catch(function(resp) {
      console.log('FAILED.');
    });
};

  $scope.signUp = function(){
    $scope.signedUp = true;
  };

}]);
