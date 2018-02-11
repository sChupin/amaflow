'use strict';
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    author: {
        type: String
    },
    content: {
        type: String
    },
    votes: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var QuestionSchema = new Schema({
  title: {
    type: String
  },
  descr: {
    type: String
  },
  author: {
      type: String
  },
  votes: {
      type: Number
  },
  answers: [AnswerSchema]
});

QuestionSchema.plugin(timestamps);

module.exports = mongoose.model('Questions', QuestionSchema);