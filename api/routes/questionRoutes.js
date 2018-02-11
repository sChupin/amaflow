'use strict';
module.exports = function(app) {
  var questionController = require('../controllers/questionController');

  // question routes
  app.route('/questions')
    .get(questionController.getAllQuestions)
    .post(questionController.createQuestion);


  app.route('/questions/:questionId')
    .get(questionController.getQuestion)
    .put(questionController.editQuestion)
    .delete(questionController.deleteQuestion);

  app.route('/questions/:questionId/answers')
  .post(questionController.createAnswer);
  
  app.route('/questions/:questionId/answers/:answerId')
    .put(questionController.editAnswer)
    .delete(questionController.deleteAnswer);
};