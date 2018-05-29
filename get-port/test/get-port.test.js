const { assert } = require('chai');
const http = require('http');
const { getPortSync, getPortAsync } = require('../get-port.js');
const log = console.log;

describe('#get-port.js', () => {
  describe('#getPortSync', () => {
    it('should return the default port 8080', () => {
      let port = getPortSync(8080);
      log('The port is: ', port);
      assert.strictEqual(8080, port);
    });

    it('should return a random free port rather than the default port 8080', () => {
      const server = http.createServer();
      server.listen(8080);

      let port = getPortSync(8080);
      log('The port is: ', port);
      assert.notStrictEqual(8080, port);
      server.close(() => {
        server.unref();
      });
    });
  });

  describe('#getPortAsync', () => {
    it('should return the default port 8080', (done) => {
      getPortAsync(8080).then(port => {
        log('The port is: ', port);
        assert.strictEqual(8080, port);
        done();
      });
    });

    it('should return a random free port rather than the default port 8080', (done) => {
      const server = http.createServer();
      server.listen(8080);
      getPortAsync(8080).then(port => {
        log('The port is: ', port);
        assert.notStrictEqual(8080, port);
        server.close(() => {
          server.unref();
        });
        done();
      });
    });
  });
});
