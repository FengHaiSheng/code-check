import './main.less';
import Vue from 'vue';
import Main from './main.vue';

const test1 = new Vue({
  el: '#app',
  render: h => h(Main)
});

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
const c = 123;

const d = 123;

console.log(a, b, test, test1, c, d);
