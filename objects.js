

//* =============== const ===============
 
// const obj2 = {
//     name:"roshan",
//     place : "ernakulam",
//     bio : function(){
//         console.log(`my name is ${this.name} and from ${this.place}`);
//     }
// }

// console.log(obj2);
// console.log(obj2.name = "athish ts");

// delete obj2.bio;
// console.log(obj2);

//* ================= object.freeze ============

// // "use strict";
// let obj1 = {
//     name : "mohammed arif",
//     place: 'ernakulam',
//     bio(){
//         console.log(`my name ${this.name} and from ${this.place}`);
//     }
// }

// console.log(obj1);

// Object.freeze(obj1);
// console.log(Object.isFrozen(obj1));

// obj1.age = 22;
// console.log(obj1);

// obj1.name = "sreekanth"
// console.log(obj1.name);

// delete obj1.name
// console.log(obj1);

//* =============== object.seal ======================= [we change the property name but cannot add new property into the object]

// const obj2 = {
//     name:"roshan",
//     place : "ernakulam",
//     bio : function(){
//         console.log(`my name is ${this.name} and from ${this.place}`);
//     }
// }

// Object.seal(obj2)
// console.log(Object.isSealed(obj2));

// obj2.name = "arif"
// console.log(obj2.name);

// obj2.age = 22;
// console.log(obj2);