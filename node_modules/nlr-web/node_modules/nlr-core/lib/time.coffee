formatTime = (h, m) ->
  m = "0#{m}" if m < 10
  "#{h}:#{m}"

exports.formatTime = formatTime;

exports.getDayTimeInMinutes = (hs, ms) -> hs * 60 + ms

exports.formatTimeInterval = (interval) ->
  bh = interval[0][0]
  bm = interval[0][1]
  eh = interval[1][0]
  em = interval[1][1]

  "#{formatTime(bh, bm)} - #{formatTime(eh, em)}"
