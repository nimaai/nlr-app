exports.getLilaIndex = (d) ->
  timeIntervals = require('../data/time-intervals')
  getDayTimeInMinutes =
    require('./time.coffee').getDayTimeInMinutes
  timeNowInMinutes =
    getDayTimeInMinutes d.getHours(), d.getMinutes()

  index = 0
  for i in [0..7]
    bh = timeIntervals[i][0][0]
    bm = timeIntervals[i][0][1]
    eh = timeIntervals[i][1][0]
    em = timeIntervals[i][1][1]

    if timeNowInMinutes < getDayTimeInMinutes(eh, em)
      index = i
      break

  index
