'use strict';

var formatTime = function (h, m) {
  m = m < 10 ? '0' + m : m;
  return [h, ':', m].join('');
};

exports.formatTimeInterval = function (interval) {
  var bh = interval[0][0]
    , bm = interval[0][1]
    , eh = interval[1][0]
    , em = interval[1][1];

  return [
    formatTime(bh, bm),
    ' - ',
    formatTime(eh, em)
  ].join('');
};

exports.formatTime = formatTime;
