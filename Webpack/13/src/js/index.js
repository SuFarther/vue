require('../css/base.css');
require('../css/less.less');
require('../css/strong.scss');

//import ts
import {output} from "./type.ts";
console.log(output('Mr.Lee'))


const name = require('./module.js');
const ts = require('../img/ts.png');
const loading = require('../img/loading.gif');
console.log(name);
console.log(ts);
console.log(loading);

let fn = (x, y) => x + y;
console.log(fn(10,20));

class Person {
    #name;
    constructor() {
        this.#name = 'Mr.Lee'
    }
}




