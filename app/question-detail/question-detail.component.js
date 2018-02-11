'use strict';

// Register `questionDetail` component, along with its associated controller and template
angular.
  module('questionDetail').
  component('questionDetail', {
    templateUrl: 'question-detail/question-detail.template.html',
    controller: ['$scope', '$location', '$route', '$routeParams', 'Question', 'Answer',
      function QuestionDetailController($scope, $location, $route, $routeParams, Question, Answer) {
        var self = this;
        $scope.answerContent = "";
        
        self.question = Question.get({questionId: $routeParams.questionId});
        
        $scope.createAnswer = function() {
          var answer = new Answer();
          answer.content = $scope.answerContent;
          answer.author = 'author';
          answer.votes = 0;
          Answer.save({ questionId: self.question._id }, answer, function() {
            $route.reload();
          });
        }

        $scope.deleteQuestion = function() {
          Question.delete({ questionId: self.question._id }, function() {
            $location.path('questions');
          });
        }
      }
    ]
  });
