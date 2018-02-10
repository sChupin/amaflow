'use strict';

angular.
  module('core.question').
  factory('Question', ['$resource',
    function($resource) {
      return $resource('questions/:questionId');
    }
  ]);
