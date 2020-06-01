import './main.less';

console.log('aaa');

let a = 1;

a++;

let b = 1;

b++;

const obj = {};

obj.name = 'test';
obj.name = 123;
obj.name = 111;

class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const test = new Test('吴博', 27);

console.log(a, b, test);

var c = 123;

var d = 123;

var e 123;