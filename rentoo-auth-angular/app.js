var app = angular.module('Rentoo', ['ng-token-auth','ui.router'])

app.run(['$rootScope','$state', function($rootScope, $state) {
  $rootScope.$on('auth:login-success', function() {
    console.log('GREAT SUCCESS');
    $state.go('home')
  })
  $rootScope.$on('auth:logout-success', function() {
    console.log('GREAT SUCCESS');
    $state.go('signup')
  });
}])

app.config(['$stateProvider','$urlRouterProvider','$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
    .state('signup', {
      url: '/',
      views: {
        content: {
          templateUrl: 'templates/signup.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('home', {
      name: 'home',
      url: '/home',
      views: {
        content: {
          templateUrl: 'templates/home.html',
          controller: 'MainCtrl'
        },
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      }
    });


  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });

}]);
