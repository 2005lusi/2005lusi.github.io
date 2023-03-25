const PI = 3.1415926
let num = 123
const arr = ['a', 'b', 'c']
const obj = { x: 1, y: 2, z: 3 }
const fn = function () { console.log('hello world') }
class User {
    constructor(name, age) {
        this.username = name
        this.age = age
    }
    getUser() {
        console.log(this.username + ' ' + this.age);
    }
}
export { PI, num, arr, obj, fn, User }
// export const PI = 3.1415926
// let num = 123
// const str = ['a', 'b', 'c', 'd']
// const obj = { x: 1, y: 2, z: 3 }
// // const fn = function () {
//     // console.log('hello wrold');
// // }
// export function fn(){console.log('hello wrold');}
// export default function () { console.log('hello wrold') }

// class User {
//     constructor(name, age) {
//         this.username = name
//         this.age = age
//     }
//     getUser() {
//         console.log(this.username + '' + this.age);
//     }
// }
// // import { PI ,num,str,obj,fn,User} from './lib1'
// import *as myVar from './lib1.js'
// console.log(myVar.PI);
// console.log(myVar.num);
// console.log(myVar.str);
// console.log(myVar.obj);



fn()
const user1 = new User('心和意顺', 9999999)
user1.getUser()

// import {PI,num,str,obj,fn,User} from './index.js'
// console.log((PI));
// console.log((num));
// console.log((str));
// console.log((obj));
// // console.log((fn));
// // console.log((User));
// fn()
// const user1 = new User('心和意顺', 9999999)
// user1.getUser()