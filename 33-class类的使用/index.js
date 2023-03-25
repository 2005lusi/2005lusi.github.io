export const PI = 3.1415926
export let num = 123
export const arr = ['a','b','c']
export const obj = {x:1,y:2,z:3}
export const fn = function(){ console.log('hello world') }
export class User{
constructor(name,age){
this.username = name
this.age = age
 }
getUser(){
console.log(this.username + ' ' + this.age);
 }
}
import {PI,num,arr,obj,fn,User} from './lib1.js'
console.log(PI);
console.log(num);
console.log(arr);
console.log(obj);
fn()
const user1 = new User('王⼩蒙',19)
user1.getUser()
// export const PI = 3.1415926
// let num = 123
// const str = ['a', 'b', 'c', 'd']
// const obj = { x: 1, y: 2, z: 3 }
// const fn = function () {
//     console.log('hello wrold');
// }
// class User {
//     constructor(name,age) {
//         this.username = name;
//         this.age = age
//     }
//     getUser() {
//         console.log(this.username + '' + this.age);
//     }
// }
// import { PI ,num,str,obj,fn,User} from './lib1.js'
// console.log((PI));
// console.log((num));
// console.log((str));
// console.log((obj));
// // 默认导出，适合函数和类
// // import myFn from './index.js'
// // myFn()
// fn()
// const user1 = new User('心和意顺', 9999999)
// user1.getUser()