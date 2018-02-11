'use strict';

describe('questionDetail', function() {

  // Load the module that contains the `questionDetail` component before each test
  beforeEach(module('questionDetail'));

  // Test the controller
  describe('QuestionDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('questions/questions.json').respond([{ title: 'Question 1', id: 'question1' }]);

      $routeParams.questionId = 'question1';

      ctrl = $componentController('questionDetail');
    }));

    it('should fetch the question details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.question).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.question).toEqual({title: 'Question 1', id: 'question1'});
    });

  });

});
