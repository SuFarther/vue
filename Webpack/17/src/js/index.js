require('css/base');
require('css/less');
require('css/strong');

//import ts
import { output } from "./type"


console.log(output('Mr.Wang'))


const name = require('./module')
console.log(name)
if(module.hot){
    module.hot.accept('./module',() => {
        console.log(name);
    })
}


const ts = require('../img/ts.png')
const loading = require('../img/loading.gif')
console.log(ts)
console.log(loading)



let fn = (x, y) => x + y
console.log(fn(10,20))

class Person {
    #name;
    constructor() {
        this.#name = 'Mr.Lee'
    }
}




