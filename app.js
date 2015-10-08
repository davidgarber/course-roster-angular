var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    templateURL: "partials/home.html"
  });
});
