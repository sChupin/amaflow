'use strict';

// Register `questionList` component, along with its associated controller and template
angular.
  module('questionList').
  component('questionList', {
    templateUrl: 'question-list/question-list.template.html',
    controller: ['$http', function QuestionListController($http) {
      var self = this;
      self.orderProp = 'lastModified';

      // fetches all information of all questions although some information is not needed (e.g. answers)
      // server query will retrieve only useful information from db to be displayed in the list (e.g. #anwsers instead of list of answers)
      $http.get('questions/questions.json').then(function(response) {
        self.questions = response.data;
      });
    }]
  });
