'use strict';

// Register `questionList` component, along with its associated controller and template
angular.
  module('questionList').
  component('questionList', {
    templateUrl: 'question-list/question-list.template.html',
    controller: ['Question', function QuestionListController(Question) {
      var self = this;
      this.questions = Question.query();
      this.orderProp = '-updatedAt';
    }]
  });
