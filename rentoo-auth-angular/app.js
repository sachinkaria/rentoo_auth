var app = angular.module('Rentoo', ['ng-token-auth'])

app.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  })
});
