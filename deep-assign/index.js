const _deepAssign = (targetObj, obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // 如果 obj 和 targetObj 有相同的 key
      // 则传入 targetObj[key] 值, 否则则为空对象
      let target = {};
      if (key in targetObj) {
        target = targetObj[key];
      }
      targetObj[key] = _deepAssign(target, obj[key]);
    } else {
      // 如果是 简单类型， 直接赋值
      targetObj[key] = obj[key];
    }
  }
  return targetObj;
}

const deepAssign = (targetObj, ...args) => {
  for (let i = 0, len = args.length; i < len; i++) {
    let obj = args[i];
    // 如果不是对象，直接使用 Object.assign
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
      Object.assign(targetObj, obj);
    } else {
      _deepAssign(targetObj, obj);
    }
  }
  return targetObj;
}
