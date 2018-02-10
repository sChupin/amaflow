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
        // Question.save();
        console.log("Create new question");
        console.log("Title = " + $scope.title);
        console.log("Content = " + $scope.content);
        console.log("Tags = " + JSON.stringify(tags));
      }
    }]
  });
