getLilaProgress = require('../lib/progress').getLilaProgress

testLilaProgress = (h, m) ->
  d = new Date(null, null, null, h, m)
  getLilaProgress(d)

exports.testLilaProgress = (test) ->
  test.expect(5)
  test.strictEqual(testLilaProgress(7, 12), 50)
  test.strictEqual(testLilaProgress(23, 59), 25)
  test.strictEqual(testLilaProgress(0, 0), 25)
  test.strictEqual(testLilaProgress(0, 1), 25)
  test.strictEqual(testLilaProgress(0, 2), 26)
  test.done()
