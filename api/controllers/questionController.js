'use strict';

var mongoose = require('mongoose'),
  Question = mongoose.model('Questions');

exports.getAllQuestions = function(req, res) {
  Question.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.createQuestion = function(req, res) {
  var newQuestion = new Question(req.body);
  newQuestion.save(function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.getQuestion = function(req, res) {
  Question.findOne({ id: req.params.questionId }, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.editQuestion = function(req, res) {
  Question.findOneAndUpdate({ id: req.params.questionId }, req.body, { new: true }, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.deleteQuestion = function(req, res) {
  Question.remove({
    id: req.params.questionId
  }, function(err, question) {
    if (err)
      res.send(err);
    res.json({ message: 'Question successfully deleted' });
  });
};

exports.createAnswer = function(req, res) {
    Question.findOneAndUpdate({ id: req.params.questionId }, { $push: { answers: req.body } }, { new: true }, function(err, question) {
      if (err)
        res.send(err);
      res.json(question);
    });
}

exports.editAnswer = function(req, res) {
  // TODO
  Question.findOneAndUpdate({ id: req.params.questionId }, { $pull: { answers: { id: req.params.answerId } } }, {new: true }, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
}

exports.deleteAnswer = function(req, res) {
  Question.findOneAndUpdate({ id: req.params.questionId }, { $pull: { answers: { id: req.params.answerId } } }, {new: true }, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
}