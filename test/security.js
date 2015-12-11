var supertest = require('supertest')
var path = require('path')
var fs = require('fs')
var S = require('string')
var li = require('li')
var ldnode = require('../index')

describe('Security', function () {

  var ldpServer = ldnode({
    root: __dirname + '/resources'
  })

  var server = supertest(ldpServer)
  it('should not serve /../any-file', function (done) {
    server.get('/../security.js')
      .expect(403)
      .end(done)
  })

  it('should not serve /../', function (done) {
    server.get('/../')
      .expect(403)
      .end(done)
  })

})

