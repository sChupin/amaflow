'use strict';

// Register `questionDetail` component, along with its associated controller and template
angular.
  module('questionDetail').
  component('questionDetail', {
    templateUrl: 'question-detail/question-detail.template.html',
    controller: ['$scope', '$routeParams', 'Question',
      function QuestionDetailController($scope, $routeParams, Question) {
        $scope.answerContent = "";
        // For latter use
        this.question = Question.get({questionId: $routeParams.questionId});
        $scope.createAnswer = function() {
          console.log("Create answer");
          console.log("Content = '" + $scope.answerContent + "'");
        }
      }
    ]
  });
