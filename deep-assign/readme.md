## deepAssign

> 30行代码实现 Object.assign 深度合并版本

### demo


```js
let a = {
  b: {
    c: {
      d: 1
    },
    g: {
      h: 2
    }
  }
}

let res = deepAssign(a, {
  b: {
    c: {
      f: 3,
      d: 4
    },
    g: {
      h: 5
    }
  }
});

console.log(res);
// { b: { c: { d: 4, f: 3 }, g: { h: 5 } } }

```
  
