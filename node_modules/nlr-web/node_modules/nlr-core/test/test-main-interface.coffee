main = require('../main')

getLilaRandomIndex = (min, max) ->
  Math.floor(Math.random() * (max - min)) + min

testDataInterface = (fn) ->
  i = getLilaRandomIndex(0, 8)
  fn(i)

exports.testMainInterface = (test) ->
  test.expect(18)

  test.ok(0 <= main.getLilaIndex(new Date()) <= 7)
  test.ok(0 <= main.getLilaProgress(new Date()) <= 100)

  test.ok(testDataInterface(main.getTimeInterval) != null)
  test.ok(testDataInterface(main.getTimeInterval).length > 0)

  test.ok(testDataInterface(main.getSanskritName) != null)
  test.ok(testDataInterface(main.getSanskritName).length > 0)

  test.ok(testDataInterface(main.getEnglishName) != null)
  test.ok(testDataInterface(main.getEnglishName).length > 0)

  test.ok(testDataInterface(main.getShortDescription) != null)
  test.ok(testDataInterface(main.getShortDescription).length > 0)

  test.ok(testDataInterface(main.getRupaDescription) != null)
  test.ok(testDataInterface(main.getRupaDescription).length > 0)

  test.ok(testDataInterface(main.getVishvanathDescription) != null)
  test.ok(testDataInterface(main.getVishvanathDescription).length > 0)

  test.ok(testDataInterface(main.getLongDescription) != null)
  test.ok(testDataInterface(main.getLongDescription).length > 0)

  test.ok(typeof main.time.formatTime == 'function')
  test.ok(typeof main.time.formatTimeInterval == 'function')

  test.done()
