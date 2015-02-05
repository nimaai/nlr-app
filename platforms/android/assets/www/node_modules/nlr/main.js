'use strict';

var timeIntervals = require('./data/time-intervals');
var sanskritNames = require('./data/sanskrit-names');
var englishNames = require('./data/english-names');
var shortDescriptions = require('./data/short-descriptions');
var rupaDescriptions = require('./data/rupa-descriptions');
var vishvanathDescriptions = require('./data/vishvanath-descriptions');

var longDescriptions = [];
longDescriptions[0] = require('./data/long/nisha');
longDescriptions[1] = require('./data/long/nishanta');
longDescriptions[2] = require('./data/long/prataha');
longDescriptions[3] = require('./data/long/purvahna');
longDescriptions[4] = require('./data/long/madhyahna');
longDescriptions[5] = require('./data/long/aparahna');
longDescriptions[6] = require('./data/long/shayana');
longDescriptions[7] = require('./data/long/pradosha');

// ***************************************************

module.exports = {

  getLilaIndex: require('./lib/index').getLilaIndex,

  getTimeInterval: function(i) {
    return timeIntervals[i];
  },

  getSanskritName: function(i) {
    return sanskritNames[i];
  },

  getEnglishName: function(i) {
    return englishNames[i];
  },

  getShortDescription: function(i) {
    return shortDescriptions[i];
  },

  getRupaDescription: function(i) {
    return rupaDescriptions[i];
  },

  getVishvanathDescription: function(i) {
    return vishvanathDescriptions[i];
  },

  getLongDescription: function(i) {
    return longDescriptions[i];
  },

  time: require('./lib/time.js')

}
