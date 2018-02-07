'use strict';

// Register `questionDetail` component, along with its associated controller and template
angular.
  module('questionDetail').
  component('questionDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.questionId}}</span>',
    controller: ['$routeParams',
      function QuestionDetailController($routeParams) {
        this.questionId = $routeParams.questionId;
      }
    ]
  });
