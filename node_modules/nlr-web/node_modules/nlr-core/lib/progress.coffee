exports.getLilaProgress = (d) ->
  timeIntervals = require('../data/time-intervals')
  getDayTimeInMinutes = require('./time.coffee').getDayTimeInMinutes
  i = require('./index.coffee').getLilaIndex(d)

  bh = timeIntervals[i][0][0]
  bm = timeIntervals[i][0][1]
  eh = timeIntervals[i][1][0]
  em = timeIntervals[i][1][1]

  timeNowInMinutes =
    getDayTimeInMinutes d.getHours(), d.getMinutes()

  lilaSpanInMinutes =
    if i == 0 # nisha lila
      before_midnight =
        getDayTimeInMinutes(23, 59) - getDayTimeInMinutes(bh, bm)
      after_midnight = getDayTimeInMinutes(eh, em)
      before_midnight + 1 + after_midnight
    else
      getDayTimeInMinutes(eh, em) - getDayTimeInMinutes(bh, bm)

  elapsedTimeInMinutes =
    if i == 0 # nisha lila
      # current time before midnight
      if getDayTimeInMinutes(bh, bm) <= timeNowInMinutes <= getDayTimeInMinutes(23, 59)
        timeNowInMinutes - getDayTimeInMinutes(bh, bm)
      # current time after midnight
      else
        before_midnight =
          getDayTimeInMinutes(23, 59) - getDayTimeInMinutes(bh, bm)
        after_midnight = timeNowInMinutes
        before_midnight + 1 + after_midnight
    else
      timeNowInMinutes - getDayTimeInMinutes(bh, bm)

  Math.round((elapsedTimeInMinutes / lilaSpanInMinutes) * 100)
