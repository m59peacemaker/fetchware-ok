var ok = function (request, next) {
  return next().then(function (response) {
    if (!response.ok) {
      var err = new Error('response sucks and we hate it')
      err.type = 'FETCHWARE_NOTOK'
      throw err
    }
    return next(response)
  })
}

module.exports = ok
