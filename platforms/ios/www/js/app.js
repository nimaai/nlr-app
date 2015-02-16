'use strict';

var update = require('./update').update;

global.window.addEventListener('load', function() {
  update();
  setInterval(update, 1000);
});
