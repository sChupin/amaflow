'use strict';

// Register `questionList` component, along with its associated controller and template
angular.
  module('questionList').
  component('questionList', {
    templateUrl: 'question-list/question-list.template.html',
    controller: ['$http', function QuestionListController($http) {
      var self = this;
      self.orderProp = 'lastModified';

      $http.get('questions/questions.json').then(function(response) {
        self.questions = response.data;
      });
    }]
  });
