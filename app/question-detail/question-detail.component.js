'use strict';

// Register `questionDetail` component, along with its associated controller and template
angular.
  module('questionDetail').
  component('questionDetail', {
    templateUrl: 'question-detail/question-detail.template.html',
    controller: ['$routeParams', 'Question',
      function QuestionDetailController($routeParams, Question) {
        var self = this;
        // For latter use
        //self.question = Question.get({questionId: $routeParams.questionId});

        // don't use $routeParams.questionId as database not configured yet
        // will be replaced by REST call to /questions/$routeParams.questionId later
        // only the corresponding question will be fetched from server/db
        Question.query(function(questions) {
          self.question = questions.filter(function(question) {
            return question.id == $routeParams.questionId;
          })[0];
        });
      }
    ]
  });
