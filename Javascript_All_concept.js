//* -------------let var const-------------

// const name = "mohammed arif";
// name = "mohammed hafis";
// console.log(name);

// let name = "arif";
// if(true){
//     console.log(` block ${name}`);
// }
// function pname(){
//     console.log(name);
//     var fname = "roshan"
// }
// pname()
// console.log(fname);

//* --------------clouser----------------

// function outer(name){
//     // var name = "mohammed arif"
//     function inner(){
//         console.log(name);
//     }
//     inner()
// }
// outer('mohammed roshan');

//*------------currying----------------

// function currying(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }
// currying(1)(2)(3)

//*--------------function composition---------------

// function a(){
//     return 10+1;
// }
// function b(){
//     return 10-1;
// }
// function c(){
//     return 10*1
// }

// function comp(x){
//     return a(b(c(x)))
// }
// console.log(comp(5));

//* -------------hoisting-------------

// hoist()
// function hoist(){
//     console.log("its function hoisted");
// }

// console.log(name);
// let name = "arif";

//* -------------callback-------------

// function mainFunc(callback){
//     console.log("outside function");
//     setTimeout(()=>{
//         console.log("timeout function");
//         callback()
//     },2000)
// }

// function callbackFunc(){
//     console.log("callback function");
// }

// mainFunc(callbackFunc)

//* -------------rest parameter-------------

// function add(a,...b){
//     console.log(a);
//     let sum=0;
//     for(let i in b){
//         sum+=b[i];
//     }
//     console.log(sum);
//     console.log(sum+a);
// }
// add(1,2,3,4,5,6)

//* -------------destucturing-------------

// let arr = [1,2,3,4];
// let [a,b,c,d] = arr;
// console.log("a ->",a);
// console.log("b ->",b);
// console.log("c ->",c);
// console.log("d ->",d);

// let obj = {name:"arif",place:"ern",job:{position:"dev",exp:"2 year"}};
// const {name,place,job:{exp,position}} = obj;
// console.log("n ->",name)
// console.log("p ->",place)
// console.log("j ->",position)
// console.log("e ->",exp);


//* -------------spread operator-------------

// let arr = [1,2,3,4];
// console.log(...arr,5,6,7);
// let resArr = [...arr,5,6,7];
// console.log(` destructured array : ${resArr}`);


// let obj = {name:"arif",place:"ern"};
// console.log({...obj,age:21});
// let resObj = {...obj,age:32};
// console.log(`obj destructring ${JSON.stringify(resObj)}`);

// let fname = "mohammed";
// let lname = "arif";

// let res = fname.concat( " ",lname);
// console.log(res);
// console.log(...fname,...lname);

//* -------------IIFE-------------

// (function(name){
//     console.log(name);
// })("arif")

//* -------------arrow funtion-------------

// let res = (a,b)=>{
//     return a+b
// }
// console.log(res(10,20));

//* -------------pure function-------------

// function pure(a,b){
//     console.log(a+b);
//     // let i=0
//     // while(true){
//     //     i++
//     //     console.log(i);
//     // }
// }
// pure(10,10);

//* -------------defualt function-------------

// function defualt(a="mohammed",b='arif'){
//     console.log(a," ",b);
// }
// defualt("mohammed","roshan")

//* -------------type coertion-------------

// console.log("a"+1);
// console.log("a"-1);
// console.log("4"-1);

//* -------------implicite & explicit casting-------------
//  Implicit casting happens automatically by the JavaScript engine when you perform operations between different data types.
// let a = '213';
// let b = 344;
// let res  = a+b;
// console.log(res);

// Explicit casting involves manually converting a value from one data type to another. This can be done using functions or operators.

// let strnum = "40";

// let pint = parseInt(strnum);
// console.log(typeof pint);
// console.log(pint);

// let pflt = parseFloat(strnum);
// console.log(typeof pflt); 
// console.log(pflt); 

// let a = "1342";
// console.log(typeof Number(a));
// let b = 13213;
// console.log(typeof String(b));

//* -------------ternary opertors------------

// let name = "mohammed arif"
// let res = name === "mohammed arif" ? "correct name" : "incorrect name";
// console.log(res);

//* -------------class------------

// class bio{
//     constructor(name,place){
//         this.name = name;
//         this.place = place;
//     }

//     sample(){
//         console.log(`my name is  ${this.name} and iam from ${this.place}`);
//     }
// }

// class inhBio extends bio {
//     constructor(name,place,age){
//         super(name,place);
//         this.age = age;
//     }

//     display(){
//         console.log(` the name is ${this.name} and place is ${this.place} and age ${this.age}`);
//     }
// }

// let obj1 =new bio("arif","ernakulam");
// obj1.sample();

// let obj2 = new inhBio("mohammed","ernakulam",22);
// obj2.display()

//* ------------generator function-------------

// function* genFunc(){
//     while(true){
//         yield 1
//         yield 2
//         yield 3
//         yield 4
//     }
// }

// let genRes = genFunc();
// console.log(genRes.next().value);
// console.log(genRes.next().value);
// console.log(genRes.next().value);
// console.log(genRes.next().value);

//* -------------optional chaining-------------

// const user = {
//     name:"arif",
//     address:{
//         city : "kochi",
//         place : "nettoor",
//         zipcode : 682040,
//     }
// } 

// let without_chaining = user.address && user.address.zipcode; 
// console.log(without_chaining);
// let with_chaining = user.address ?. zipcode;
// console.log(with_chaining);

//* --------------- nullish operator -------------------

// ---The nullish coalescing operator (??) is a JavaScript logical operator that returns the right-hand operand
//    when the left-hand operand is null or undefined.It provides a convenient way to provide a default value when dealing
//    with potentially null or undefined variables.

// let name1 = "arif";
// let name2 = null ;
// let res = name2 ?? name1;
// console.log(res);

//* -------------object methods-------------

let person = {
    name : "mohammed arif",
    address : {
        place : "ernakulam",
        state : "kerala",
        country : "india"
    },
    job : "developer",
    skill : {
        language : ["python","js","c++","java"]
    }
}

//!--
// console.log(person.expresience = "2 year");
// console.log(person);
//!--entries
// for(let[key,value] of Object.entries(person)){
//     console.log(`${key} : ${value}`);
// }
//!--loop
// for(let obj in person){
//     console.log(`${obj} : ${person[obj]}`);
// }
//!--
// console.log(person["address"])
//!--object.freeze
// console.log(Object.isFrozen(person))
// Object.freeze(person);
// person.name = "asdfadsfsdafd";
// console.log(person.name);
// console.log(Object.isFrozen(person))
//!--object.seal
// console.log(Object.isSealed(person));
// // console.log(person.companyname = "google");
// console.log(Object.seal(person));
// person.name = "roshan"
// console.log(person);
// console.log(person.companyname = "google");
// console.log(Object.isSealed(person));
//!-- in opoerator to check
// let check = "name" in person;
// console.log(check);
//!--object.values
// console.log(Object.values(person));
//!--object.keys
// console.log(Object.keys(person));
//!--
// console.log(person.address);
//!--hasownproperty
// console.log(person.hasOwnProperty("skill"));
//!--
// console.log(person.skill.language[2]);

//* -------------array method-------------

let array1 = [1,2,3,4,5];
console.log({array1});
//! include
// let include =(clr)=>{
//     return  array1.includes(4)
// }
// console.log(include())

//!slice
// let res = array1.slice(1,3);
// console.log(res);
//!splice  .(startIndex, deleteCount, item,itemN)
// array1.splice(2,3,"arif","qqq");
// console.log(array1);
//!unshift
// array1.unshift(55,88);
// console.log(array1);
//!shift
// array1.shift();
// console.log(array1);
//!pop
// array1.pop();
// console.log(array1);
//!push
// array1.push(44,43);
// console.log(array1);
//!concat
// let res = array1.concat(23,45,32,34);
// console.log(res);
//!  Flattening an array is the process of reducing the dimensionality of an array.
// const myArr = [[1,2],[3,4],[5,6]];
// let newarr = myArr.flat()
// console.log(newarr);

//* -------------async await-------------

// function fetchDataPromise(number){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(number%2==0){
//                 resolve(` ${number} even nnumber`)
//             }else{
//                 reject(`${number} odd number`)
//             }
//         },1000)
//     })
// }

// async function processDataAsync(number){
//     console.log('start processing number');
//     try{
//         const res = await fetchDataPromise(number);
//         console.log(res);
//     }catch(error){
//         console.error("ERROR :",error);
//     }
//     console.log('completed');
// }

// processDataAsync(31)

//* -------------passByvalue & passBy reference------------

//! passbyvalue
// let num = 10;
// function number(num){
//     console.log(num*=2)
// }
// number(num)
// console.log(num);

//! passbyRefernce
// let obj1 = {name:"arif"};
// function objectUpdate(obj1){
//     console.log(obj1.name = "mohammed arif")
// }
// objectUpdate(obj1);
// console.log(obj1);

//* -------------shallow copy & deep copy------------

//---- Shallow copy: Creates a new reference to the original object or array, but any nested objects or arrays remain references to the originals.
       // Modifying these nested elements affects both the original and the copy

// //! Object example
// const originalObj1 = { name: "John", address: { street: "Main St." } };
// const shallowCopyObj = originalObj1; // Only copies the reference, not the object itself
// shallowCopyObj.address.street = "Elm St."; // Modifies the nested object in both original and copy
// console.log(originalObj1.address.street); // Output: "Elm St." (modified through shallow copy)

// //! Array example
// const originalArr1 = [1, 2, [3, 4]];
// const shallowCopyArr = originalArr1.slice(); // Creates a new array, but nested array is still a reference
// shallowCopyArr[2][0] = 5; // Modifies the nested element in both original and copy
// console.log(originalArr1[2][0]); // Output: 5 (modified through shallow copy)

//--- Deep copy: Creates a completely independent copy of the original, including any nested objects or arrays.
// Modifications made to the copy do not affectthe original and vice versa-----

// //! --object example
// const originalObj = { name: "John", address: { street: "Main St." } };
// const deepCopyObj = JSON.parse(JSON.stringify(originalObj)); // Stringifies and parses object to create a new copy
// deepCopyObj.address.street = "Elm St."; // Only modifies the copy's nested object
// console.log(originalObj.address.street); // Output: "Main St." (original remains unchanged)
// //! --Array example
// const originalArr = [1, 2, [3, 4]];
// const deepCopyArr = JSON.parse(JSON.stringify(originalArr)); // Stringifies and parses array to create a new copy
// deepCopyArr[2][0] = 5; // Only modifies the copy's nested element
// console.log(originalArr[2][0]); // Output: 3 (original remains unchanged)

//* ------------promises--------------

// let promise = new Promise((res,rej)=>{
//     let name = "mohammed arif"
//     if(name==="mohammed arif"){
//         res(name);
//     }else{
//         rej("its not correct name")
//     }
// })
// promise.then((name)=>{
//     console.log(`correct name ${name}`);
// }).catch((err)=>{
//     console.log(err);
// })

//* -------------error handing-------------

// try{
//     let divisor = 0;
//     if (divisor === 0) {
//       throw new Error("Division by zero is not allowed.");
//     }
//     let result = 100 / divisor;
//     console.log("The result is ", result);
// }catch(error){
//     console.error("Error:", error.message);
// }finally {
//     console.log("Finished");
// }
  
//!--
// function errorHandling(x,y){
//     try{
//         if(y===0){
//             throw new Error("cannot divided by zero")
//         }
//         let res = x/y;
//         console.log(res);
//     }catch(error){
//         console.log("Error occured",error.message);
//     }finally{
//         console.log("finished");
//     }
// }
// errorHandling(10,0)

//* -------------Call Apply Bind------------

// let obj1 = {
//     name : "arif",
//     place : "ernakulam",
// }

// let obj2 = {
//     name: "mohammed",
//     place : "kannur"
// }

// function display(age){
//     console.log(` the name is ${this.name} and from ${this.place} and age ${age}`);
// }

// const call = display.call(obj1,21)
// const apply = display.apply(obj2,[23])
// const bind = display.bind(obj1,20);
// bind();

//* -------------loop------------

// let arr1 = [1,2,3,4,5]
// let sum = 0
// for(let i=0;i<arr1.length;i++){
//     sum+=arr1[i]
//     // console.log(arr1[i]);
// }
// console.log(sum);

// let  i = 0;
// while(i<10){
//     i++
//     console.log(i);
// }

// let j = 0
// do{
//     console.log(j);
//     j++;
// }
// while(j<7)

//* -----------map()-reduce()-filter()-foreach()-----------

let arr = [1,2,3,4,5];

// let map = arr.map((val)=>{
//     return val*2;
// });
// console.log(map);

// let reduce = arr.reduce((val,total)=>{
//     return val+total
// },0);
// console.log(reduce);

// let filter = arr.filter((val)=>{
//     return val%2==0
// })
// console.log(filter);

// let foreach = ""
// let total = 0
// arr.forEach((val,i)=>{
//     total += val
//     foreach+= `value is ${val} and index is ${i} \n`
// }) 
// console.log(foreach);
// console.log(total);

//* ------------parseInt & parseFloat---------------

// let str = '34';
// console.log(typeof str);
// let pstr = parseInt(str);
// console.log(typeof pstr);

// let flt = '3.15';
// console.log(typeof flt);
// let pflt = parseFloat(flt);
// console.log(typeof pflt);

//* -------------heigher order function-------------

// function func1(){
//     console.log("first function");
// }
// function func2(){
//     console.log("second function");
// }

// function hof(func1,func2){
//     console.log("heigher order function");
//     func1()
//     func2()
// }
// hof(func1,func2)

//* -------------temporal death zone------------

// console.log(vname);
// var vname = "arif";
// console.log(letname);
// let letname  = "arif";
// console.log(cname);
// const cname = "arif";






//! --------------NODE.JS--------------------

// let http = require('http');

// let server = http.createServer((req,res)=>{
//     res.write("mohammed arif")
//     res.end();
    
// })
// server.listen(2000,()=>{
//     console.log('server is running');
// })



