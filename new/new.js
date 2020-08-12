function create(Clazz, ...args) {
    const obj = new Object();
    Object.setPrototypeOf(obj, Clazz.prototype);

    const newObj = Clazz.apply(obj, args);

    return newObj instanceof Clazz ? newObj : obj;
}

// demo
const Demo = function Demo(name) {
    this.names = name || 'demo\' name';
};

Demo.prototype.getNames = function () {
    return this.names;
};

const demo = create(Demo, 'idsbllp');

console.log('use create', demo.getNames());

const demo1 = new Demo('idsbllp1');

console.log('use new', demo1.getNames());

console.log('compare proto function', demo.getNames === demo1.getNames);
