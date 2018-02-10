'use strict';
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;


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
  answers: {
      type: [{
            author: {
                type: String
            },
            content: {
                type: String
            },
            createdOn: {
                type: Date
            },
            lastModified: {
                type: Date
            },
            votes: {
                type: Number
            }
      }]
      //type: [{type: Schema.ObjectId, ref: 'Answer'}]
  }
});

QuestionSchema.plugin(timestamps);

module.exports = mongoose.model('Questions', QuestionSchema);