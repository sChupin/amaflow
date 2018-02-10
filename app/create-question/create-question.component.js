'use strict';

// Register `createQuestion` component, along with its associated controller and template
angular.
  module('createQuestion').
  component('createQuestion', {
    templateUrl: 'create-question/create-question.template.html',
    controller: ['$scope', '$location', 'Question', function CreateQuestionController($scope, $location, Question) {
      $scope.title = "";
      $scope.content = "";
      $scope.tags = "";
      $scope.createQuestion = function() {
        // Get tags
        var tags = $scope.tags.split(/\s*;\s*/);
        var question = new Question();
        question.title = $scope.title;
        question.descr = $scope.content;
        question.author = 'author';
        question.votes = 0;
        question.answers = [];
        Question.save(question, function(question) {
          $location.path('questions/' + question._id);
        });
      }
    }]
  });
