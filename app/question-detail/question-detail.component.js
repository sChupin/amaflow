'use strict';

// Register `questionDetail` component, along with its associated controller and template
angular.
  module('questionDetail').
  component('questionDetail', {
    templateUrl: 'question-detail/question-detail.template.html',
    controller: ['$scope', '$location', '$routeParams', 'Question',
      function QuestionDetailController($scope, $location, $routeParams, Question) {
        var self = this;
        $scope.answerContent = "";
        
        self.question = Question.get({questionId: $routeParams.questionId});
        
        $scope.createAnswer = function() {
          console.log("Create answer");
          console.log("Content = '" + $scope.answerContent + "'");
        }

        $scope.deleteQuestion = function() {
          Question.delete({ questionId: self.question._id }, function() {
            $location.path('questions');
          });
        }
      }
    ]
  });
