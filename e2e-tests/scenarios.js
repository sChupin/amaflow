'use strict';

describe('Amaflow Application', function() {

  it('should redirect `index.html` to `index.html#!questions`', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/questions');
  });

  describe('View: Question list', function() {

    beforeEach(function() {
      browser.get('index.html#!/questions');
    });

    it('should filter the question list as a user types into the search box', function() {
      var questionList = element.all(by.repeater('question in $ctrl.questions'));
      var query = element(by.model('$ctrl.query'));

      expect(questionList.count()).toBe(3);

      query.sendKeys('Quest');
      expect(questionList.count()).toBe(3);

      query.clear();
      query.sendKeys('1');
      expect(questionList.count()).toBe(1);
    });

    it('should be possible to control question order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var titleOption = orderSelect.element(by.css('option[value="title"]'));
      var votesOption = orderSelect.element(by.css('option[value="-votes"]'));
      var questionTitleColumn = element.all(by.repeater('question in $ctrl.questions').column('question.title'));

      function getTitles() {
        return questionTitleColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('Quest');

      expect(getTitles()).toEqual([
        'Question 2',
        'Question 3',
        'Question 1'
      ]);

      titleOption.click();

      expect(getTitles()).toEqual([
        'Question 1',
        'Question 2',
        'Question 3'
      ]);

      votesOption.click();

      expect(getTitles()).toEqual([
        'Question 1',
        'Question 3',
        'Question 2'
      ]);
    });

    it('should render question specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('Question 1');

      element.all(by.css('.questions li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/questions/question1');
    });

  });

  describe('View: Question detail', function() {

    beforeEach(function() {
      browser.get('index#!/questions/question1');
    });

    it('should display the `questionId` detail page', function() {
      expect(element(by.binding('$ctrl.question.title')).getText()).toBe('Question 1');
    });

  });

});
