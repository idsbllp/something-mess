// just a demo, see get-port.js

const { getPortAsync, getPortSync } = require('./get-port.js');

let port = getPortSync(8080);

getPortAsync(8080).then(port => {
  // code here
});
