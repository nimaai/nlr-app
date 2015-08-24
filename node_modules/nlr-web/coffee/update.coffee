nlr = require('nlr-core/main.coffee')
index = null

updateCurrentTime = (currentHour, currentMinute) ->
  global.document.getElementById('current-time').innerHTML =
    nlr.time.formatTime(currentHour, currentMinute)

updateLilaInformation = (index) ->
  global.document.getElementById('sanskrit-name').innerHTML =
    nlr.getSanskritName(index) + ' Lila'
  global.document.getElementById('english-name').innerHTML =
    nlr.getEnglishName(index)
  global.document.getElementById('time-interval').innerHTML =
    nlr.time.formatTimeInterval(nlr.getTimeInterval(index))

  global.document.getElementById('short-description').innerHTML =
    nlr.getShortDescription(index)
  global.document.getElementById('rupa-description').innerHTML =
    nlr.getRupaDescription(index)
  global.document.getElementById('vishvanath-description').innerHTML =
    nlr.getVishvanathDescription(index)
  global.document.getElementById('long-description').innerHTML =
    nlr.getLongDescription(index).join('<br><br>')

updateLilaProgress = (d) ->
  procent = nlr.getLilaProgress(d)
  lilaProgress = global.document.getElementById('lila-progress')
  lilaProgress.setAttribute('aria-valuenow', procent)
  lilaProgress.setAttribute('style', 'width: ' + procent + '%;')

exports.update = ->
  currentDate = new Date()
  currentHour = currentDate.getHours()
  currentMinute = currentDate.getMinutes()
  i = nlr.getLilaIndex(currentDate)

  updateCurrentTime(currentHour, currentMinute)
  updateLilaProgress(currentDate)

  if (i != index)
    index = i
    updateLilaInformation(i)
