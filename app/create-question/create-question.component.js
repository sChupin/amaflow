'use strict';

// Register `createQuestion` component, along with its associated controller and template
angular.
  module('createQuestion').
  component('createQuestion', {
    templateUrl: 'create-question/create-question.template.html',
    controller: ['$scope', 'Question', function CreateQuestionController($scope, Question) {
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
        question.createdOn = 1517921215000;
        question.lastModified = 1517921215000;
        question.votes = 0;
        question.answers = [];
        Question.save(question);
      }
    }]
  });
