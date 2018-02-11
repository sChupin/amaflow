'use strict';

angular.
  module('amaflowApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/questions', {
          template: '<question-list></question-list>'
        }).
        when('/questions/create', {
          template: '<create-question></create-question>'
        }).
        when('/questions/:questionId', {
          template: '<question-detail></question-detail>'
        }).
        otherwise('/questions');
    }
  ]);
