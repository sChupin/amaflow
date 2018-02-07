'use strict';

// Register `questionDetail` component, along with its associated controller and template
angular.
  module('questionDetail').
  component('questionDetail', {
    templateUrl: 'question-detail/question-detail.template.html',
    controller: ['$http', '$routeParams',
      function QuestionDetailController($http, $routeParams) {
        var self = this;

        // don't use $routeParams.questionId as database not configured yet
        // will be replaced by REST call to /questions/$routeParams.questionId later
        // only the corresponding question will be fetched from server/db
        $http.get('questions/questions.json').then(function(response) {
          self.question = response.data.filter(function(question) {
            console.log($routeParams.questionId);
            return question.id == $routeParams.questionId;
          })[0];
        });
      }
    ]
  });
