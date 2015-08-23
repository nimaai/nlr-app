getLilaIndex = require('../lib/index').getLilaIndex

testIndex = (h, m) ->
  d = new Date(null, null, null, h, m)
  getLilaIndex(d)

exports.testIndex = (test) ->
  test.expect(27)

  test.strictEqual(testIndex(3, 35), 0)
  test.strictEqual(testIndex(3, 36), 1)
  test.strictEqual(testIndex(3, 37), 1)

  test.strictEqual(testIndex(5, 59), 1)
  test.strictEqual(testIndex(6, 0), 2)
  test.strictEqual(testIndex(6, 1), 2)

  test.strictEqual(testIndex(8, 23), 2)
  test.strictEqual(testIndex(8, 24), 3)
  test.strictEqual(testIndex(8, 25), 3)

  test.strictEqual(testIndex(10, 47), 3)
  test.strictEqual(testIndex(10, 48), 4)
  test.strictEqual(testIndex(10, 49), 4)

  test.strictEqual(testIndex(15, 35), 4)
  test.strictEqual(testIndex(15, 36), 5)
  test.strictEqual(testIndex(15, 37), 5)

  test.strictEqual(testIndex(17, 59), 5)
  test.strictEqual(testIndex(18, 0), 6)
  test.strictEqual(testIndex(18, 1), 6)

  test.strictEqual(testIndex(20, 23), 6)
  test.strictEqual(testIndex(20, 24), 7)
  test.strictEqual(testIndex(20, 25), 7)

  test.strictEqual(testIndex(22, 47), 7)
  test.strictEqual(testIndex(22, 48), 0)
  test.strictEqual(testIndex(22, 49), 0)

  test.strictEqual(testIndex(23, 59), 0)
  test.strictEqual(testIndex(0, 0), 0)
  test.strictEqual(testIndex(0, 1), 0)

  test.done()
