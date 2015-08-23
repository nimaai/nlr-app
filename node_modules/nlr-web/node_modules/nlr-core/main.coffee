timeIntervals = require('./data/time-intervals.json')
sanskritNames = require('./data/sanskrit-names.json')
englishNames = require('./data/english-names.json')
shortDescriptions = require('./data/short-descriptions.json')
rupaDescriptions = require('./data/rupa-descriptions.json')
vishvanathDescriptions = require('./data/vishvanath-descriptions.json')

longDescriptions = []
longDescriptions[0] = require('./data/long/nisha.json')
longDescriptions[1] = require('./data/long/nishanta.json')
longDescriptions[2] = require('./data/long/prataha.json')
longDescriptions[3] = require('./data/long/purvahna.json')
longDescriptions[4] = require('./data/long/madhyahna.json')
longDescriptions[5] = require('./data/long/aparahna.json')
longDescriptions[6] = require('./data/long/shayana.json')
longDescriptions[7] = require('./data/long/pradosha.json')

module.exports =
  getLilaIndex: require('./lib/index.coffee').getLilaIndex
  getLilaProgress: require('./lib/progress.coffee').getLilaProgress
  getTimeInterval: (i) -> timeIntervals[i]
  getSanskritName: (i) -> sanskritNames[i]
  getEnglishName: (i) -> englishNames[i]
  getShortDescription: (i) -> shortDescriptions[i]
  getRupaDescription: (i) -> rupaDescriptions[i]
  getVishvanathDescription: (i) -> vishvanathDescriptions[i]
  getLongDescription: (i) -> longDescriptions[i]
  time: require('./lib/time.coffee')
