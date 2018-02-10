'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  descr: {
    type: String
  },
  author: {
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
  },
  answers: {
      type: [{
            id: {
                type: String
            },
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

module.exports = mongoose.model('Questions', QuestionSchema);