## get port

## usage

#### 1.get port asynchronous

```javascript
const { getPortAsync } = require('./get-port.js');

let defaultPort = 8080;
getPortAsync(defaultPort).then(port => {
  // code here
});

```
#### 2.get port synchronous

```javascript
const { getPortSync } = require('./get-port.js');

let defaultPort = 8080;
let port = getPortSync(defaultPort);

```

### test

```
npm test
```
