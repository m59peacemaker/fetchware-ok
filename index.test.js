var test = require('tape')
var ok = require('./')

test('does nothing when response is ok', function (t) {
  t.plan(1)

  ok({}, function () {
    return Promise.resolve({ ok: true })
  })
    .then(function (response) {
      t.deepEqual(response, { ok: true })
    })
})

test('throws when response is not ok', function (t) {
  t.plan(2)

  ok({}, function () {
    return Promise.resolve({ ok: false })
  })
    .then(function (response) {
      t.fail('did not throw when response not ok')
    })
    .catch(function (err) {
      t.pass('threw')
      t.equal(err.type, 'FETCHWARE_NOTOK')
    })
})
