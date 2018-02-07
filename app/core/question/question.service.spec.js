'use strict';

describe('Question', function() {
  var $httpBackend;
  var Question;
  var questionsData = [
    {name: 'Question X'},
    {name: 'Question Y'},
    {name: 'Question Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Question` service before each test
  beforeEach(module('core.question'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Question_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('questions/questions.json').respond(questionsData);

    Question = _Question_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the questions data from `/questions/questions.json`', function() {
    var questions = Question.query();

    expect(questions).toEqual([]);

    $httpBackend.flush();
    expect(questions).toEqual(questionsData);
  });

});
