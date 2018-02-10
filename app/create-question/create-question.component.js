'use strict';

// Register `createQuestion` component, along with its associated controller and template
angular.
  module('createQuestion').
  component('createQuestion', {
    templateUrl: 'create-question/create-question.template.html',
    controller: ['Question', function CreateQuestionController(Question) {
      this.createQuestion = function() {
          Question.save();
      }
    }]
  });
