'use strict';

var nlr = require('nlr');
var index = null;

var updateCurrentTime = function(currentHour, currentMinute) {
  global.document.getElementById('current-time').innerHTML =
    nlr.time.formatTime(currentHour, currentMinute);
};

var updateLilaInformation = function(index) {
  global.document.getElementById('sanskrit-name').innerHTML =
    nlr.getSanskritName(index) + ' Lila';
  global.document.getElementById('english-name').innerHTML =
    nlr.getEnglishName(index);
  global.document.getElementById('time-interval').innerHTML =
    nlr.time.formatTimeInterval(nlr.getTimeInterval(index));

  global.document.getElementById('short-description').innerHTML =
    nlr.getShortDescription(index);
  global.document.getElementById('rupa-description').innerHTML =
    nlr.getRupaDescription(index);
  global.document.getElementById('vishvanath-description').innerHTML =
    nlr.getVishvanathDescription(index);
  global.document.getElementById('long-description').innerHTML =
    nlr.getLongDescription(index).join('<br><br>');
};

exports.update = function() {
  var currentDate = new Date()
    , currentHour = currentDate.getHours()
    , currentMinute = currentDate.getMinutes()
    , i = nlr.getLilaIndex(currentDate);

  updateCurrentTime(currentHour, currentMinute);

  if (i != index) {
    index = i;
    updateLilaInformation(i);
  }
};
