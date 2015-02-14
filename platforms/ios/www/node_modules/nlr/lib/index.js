'use strict';

var timeIntervals = require('../data/time-intervals');

var getDayTimeInMinutes = function(hs, ms) {
  return hs * 60 + ms;
};

exports.getLilaIndex = function(d) {
  var index, i;
  var timeNowInMinutes =
    getDayTimeInMinutes(d.getHours(),
                        d.getMinutes());

  index = 0;
  for (i = index; i < 8; i = i + 1) {
    var bh = timeIntervals[i][0][0]
      , bm = timeIntervals[i][0][1]
      , eh = timeIntervals[i][1][0]
      , em = timeIntervals[i][1][1];

    if (timeNowInMinutes < getDayTimeInMinutes(eh, em)) {
      index = i;
      break;
    }
  }

  return index;
};
