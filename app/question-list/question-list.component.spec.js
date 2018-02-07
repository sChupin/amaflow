'use strict';

describe('questionList', function() {

  // Load the module that contains the `questionList` component before each test
  beforeEach(module('questionList'));

  // Test the controller
  describe('QuestionListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('questions/questions.json')
                  .respond([{ title: 'Question 1' }, { title: 'Question 2' }])
      ctrl = $componentController('questionList');
    }));

    it('should create a question list model with 2 questions fetched with `$http`', function() {
      expect(ctrl.questions).toBeUndefined();

      $httpBackend.flush();  
      expect(ctrl.questions.length).toBe(2);
      expect(ctrl.questions).toEqual([{ title: 'Question 1' }, { title: 'Question 2' }]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('lastModified');
    });
  
  });

});
