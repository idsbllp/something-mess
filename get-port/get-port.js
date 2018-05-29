/*
  reference: 
  https://stackoverflow.com/questions/28050171/nodejs-random-free-tcp-ports
  https://github.com/ujc/get-port-sync
*/

const net = require('net');
const deasync = require('deasync');

// get port asynchronous
function _getPortAsync(port = 0) {
  return new Promise(function(resolve, reject) {
    let server = net.createServer();

    server.on('error', reject);

    server.listen({ port }, function() {
      let address = server.address();
      if (!address && !address.port) {
        reject();
      };

      server.close(() => {
        // remove server from node event loop
        server.unref();

        resolve(address.port);
      });
    });
  });
}

function getPortAsync(port = 0) {
  return _getPortAsync(port).catch(function() {
    // listening 0.0.0.0:0 if error or default port is occipied
    // get a free port from the system 
    return _getPortAsync(0);
  })
}

// get port synchronous
function getPortSync(port = 0) {
  let isDone = false;
  // default port
  let res = port;

  getPortAsync(port).then(function(_port) {
    isDone = true;
    res = _port;
  }).catch(function(err) {
    isDone = true;
  });

  deasync.loopWhile(function() {
    return !isDone;
  });
  return res;
}

module.exports = {
  getPortAsync,
  getPortSync
}
