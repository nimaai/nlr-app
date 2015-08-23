update = require('./update.coffee').update
jQuery = require('jquery')
window.$ = jQuery
window.jQuery = jQuery

# this variable is not used -> always global
require('bootstrap')
require('scrollup/dist/jquery.scrollUp.min.js')

window.addEventListener 'load', ->
  $.scrollUp()
  update()
  setInterval(update, 1000)
