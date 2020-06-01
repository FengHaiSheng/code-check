import './main.less';
// import Vue from 'vue';
// import Main from './main.vue';

// const test1 = new Vue({
//   el: '#app',
//   render: h => h(Main)
// });

const a = 1;
const b = 1;
const e = 1;
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

console.log(a, b, test, c, d, e);
